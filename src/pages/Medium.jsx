import React, { useEffect, useState } from "react";
import MediumCard from "../components/medium/MediumCard";
import "../css/medium.css";

const Medium = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const url = `https://api.allorigins.win/get?url=${encodeURIComponent(
          "https://medium.com/feed/dsc-umit"
        )}`;

        const response = await fetch(url);
        const data = await response.json();


    //      console.log("Raw data from AllOrigins:", data); // <-- see the raw feed
    // console.log("Decoded feed:", data.contents); // <-- the XML contents

        const parser = new DOMParser();
        const xml = parser.parseFromString(data.contents, "text/xml");
        const items = xml.querySelectorAll("item");

        const posts = Array.from(items).map((item) => {
          const title = item.querySelector("title")?.textContent;
          const link = item.querySelector("link")?.textContent;
          const dcCreator = item.getElementsByTagNameNS("http://purl.org/dc/elements/1.1/", "creator")[0];
const author = dcCreator?.textContent || "Unknown";
          const pubDate = new Date(
            item.querySelector("pubDate")?.textContent
          ).toDateString();

          const imgMatch = item.innerHTML.match(/<img[^>]+src="([^">]+)"/);
          const image = imgMatch ? imgMatch[1] : "/default.jpg";

          return { title, link, author, date: pubDate, image };
        });

        setArticles(posts);
      } catch (err) {
        console.error("Error fetching feed:", err);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">
        GDG UMIT Medium Articles
      </h2>

      {articles.length === 0 ? (
        <div>
        <p className="text-gray-400 text-center">Loading... </p>
        <p className="text-gray-400 text-center">This may take a while... </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <MediumCard key={idx} {...article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Medium;
