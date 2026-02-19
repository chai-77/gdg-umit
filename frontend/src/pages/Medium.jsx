import React, { useEffect, useState } from "react";
import MediumCard from "../components/medium/MediumCard";

const Medium = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Helper function to extract image from HTML string
  const extractImageFromHtml = (html) => {
    if (!html) return "/default.jpg";
    const imgMatch = html.match(/<img[^>]+src="([^">]+)"/);
    return imgMatch ? imgMatch[1] : "/default.jpg";
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const rssUrl = "https://medium.com/feed/dsc-umit";
        const url = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
          rssUrl
        )}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.status === "ok") {
          const posts = data.items.map((item) => ({
            title: item.title,
            link: item.link,
            author: item.author || "GDG UMIT",
            date: item.pubDate,
            // Keeping the image extraction logic exactly as you wanted
            image: extractImageFromHtml(
              item.content || item.description
            ),
          }));

          setArticles(posts.slice(0, 9));
        } else {
          throw new Error("Feed status not OK");
        }
      } catch (err) {
        console.error("Error fetching Medium feed:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section className="bg-black py-24 md:py-32 relative overflow-hidden font-mono">
      <div className="max-w-7xl mx-auto px-6 text-white">

        {/* HEADER */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4 uppercase italic">
            Medium Articles
          </h2>
          <p className="max-w-3xl text-base md:text-xl text-white/50 font-light">
            Deep dive into technical tutorials, community stories, and insights from our team.
          </p>
        </div>

        {/* SECTION TITLE */}
        <div className="flex flex-col gap-2 mb-12">
          <h3 className="text-2xl md:text-3xl font-black text-gdg-green uppercase italic">
            Latest Stories
          </h3>
          {/* <div className="w-20 h-1 bg-gdg-green" /> */}
        </div>

        {/* ARTICLES GRID */}
        {loading ? (
          <div className="text-center py-20 bg-white/5 border border-white/10">
            <p className="text-lg text-white/50 animate-pulse uppercase tracking-widest">
              Fetching articles from Medium...
            </p>
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center py-20 bg-white/5 border border-white/10">
            <p className="text-lg text-white/50 font-light">
              No articles found. Check back later!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {articles.map((article, idx) => (
              <MediumCard key={idx} {...article} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Medium;