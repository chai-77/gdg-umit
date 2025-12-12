import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MediumCard from "../medium/MediumCard"; 

const MediumPreview = () => {
  const [articles, setArticles] = useState([]);

  const gdgColors = {
    red: "#EA4335",
    green: "#34A853",
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const url = `https://api.allorigins.win/get?url=${encodeURIComponent(
          "https://medium.com/feed/dsc-umit"
        )}`;

        const response = await fetch(url);
        const data = await response.json();

        const parser = new DOMParser();
        const xml = parser.parseFromString(data.contents, "text/xml");
        const items = xml.querySelectorAll("item");

        const posts = Array.from(items).map((item) => {
          const title = item.querySelector("title")?.textContent;
          const link = item.querySelector("link")?.textContent;

          const dcCreator = item.getElementsByTagNameNS(
            "http://purl.org/dc/elements/1.1/",
            "creator"
          )[0];
          const author = dcCreator?.textContent || "GDG UMIT";

          const pubDate = new Date(
            item.querySelector("pubDate")?.textContent
          ).toDateString();

          // ✅ Extract first image, supports src or data-src
          const content = item.innerHTML;
          const imgMatch = content.match(/<img[^>]+(?:src|data-src)="([^">]+)"/);
          const image = imgMatch ? imgMatch[1] : "/default-article-image.jpg";

          return { title, link, author, date: pubDate, image };
        });

        setArticles(posts.slice(0, 3)); // Limit to 3 for preview
      } catch (err) {
        console.error("Error fetching Medium feed:", err);
        setArticles([]);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section className="bg-[#1a1a1a] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <header className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">
            Latest Insights from <span style={{ color: gdgColors.green }}>Our Blog</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Deep dives, tutorials, and event recaps written by the GDG UMIT community.
          </p>
        </header>

        {articles.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-400 text-lg">Loading articles, please wait...</p>
            <p className="text-gray-500 text-sm mt-1">If this persists, the feed might be unavailable.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <MediumCard key={idx} {...article} />
            ))}
          </div>
        )}

        <div className="text-center mt-16">
          <Link
            to="https://medium.com/dsc-umit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 w-60 text-lg font-bold rounded-lg text-white bg-black border-4 transition-all duration-200 
                       transform hover:shadow-none hover:translate-x-1 hover:translate-y-1"
            style={{ 
              borderColor: gdgColors.green, 
              backgroundColor: "#121212",
              boxShadow: `5px 5px 0 0 ${gdgColors.green}`,
            }}
          >
            Visit Our Blog &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MediumPreview;
