import React from "react";

export default function App() {
  const posts = [
    {
      id: 1,
      title: "India's blind women cricketers chase history at first T20 World Cup",
      description: "The ongoing inaugural Blind Women's T20 Cricket World Cup has put the spotlight on visually impaired Indian women who have overcome immense challenges to reach this stage.",
      image: "https://ichef.bbci.co.uk/news/800/cpsprodpb/093e/live/ff5c7060-c773-11f0-b0e6-6b19d8000d31.jpg.webp",
      link: "https://www.bbc.com/news/articles/c78z8n3kvnro",
    },
    {
      id: 2,
      title: "Indian fighter jet pilot killed in crash at Dubai airshow",
      description: "A pilot has died after an Indian fighter jet crashed while performing a display at an airshow in Dubai, officials have said.",
      image: "https://ichef.bbci.co.uk/news/800/cpsprodpb/3473/live/a7141fa0-c6cb-11f0-86f1-fbec718c2a79.jpg.webp",
      link: "https://www.bbc.com/news/articles/cx2egwlxj36o",
    },
    {
      id: 3,
      title: "India's largest conglomerate stops Russian oil imports amid global pressure",
      description: "India's largest conglomerate Reliance Industries, owned by billionaire Mukesh Ambani, has stopped importing Russian crude oil for its export-only refining unit at Jamnagar in the western state of Gujarat.",
      image: "https://ichef.bbci.co.uk/news/800/cpsprodpb/fda0/live/7f156160-c6a0-11f0-a12c-778d07696190.jpg.webp",
      link: "https://www.bbc.com/news/articles/c9d911e7nxeo",
    },
    {
      id: 4,
      title: "Men posing as India's central bank officials pull off $800,000 heist",
      description: "Armed men posing as officials from India's central bank have robbed a vehicle transporting 70m rupees ($800,000; £600,000) in the southern state of Karnataka, police say.",
      image: "https://ichef.bbci.co.uk/news/800/cpsprodpb/6cde/live/0e447af0-c68e-11f0-967a-cd30d7317be5.jpg.webp",
      link: "https://www.bbc.com/news/articles/c4gpgp07zdko",
    },
    {
      id: 5,
      title: "India's delayed action plan raises eyebrows at COP30 climate summit",
      description: "At this year's UN climate summit (COP30), under way in Brazil's Belem city, all eyes are on India - the world's third largest carbon emitter.",
      image: "https://ichef.bbci.co.uk/news/800/cpsprodpb/f972/live/ba929fd0-c675-11f0-a674-cf008e1f5535.jpg.webp",
      link: "https://www.bbc.com/news/articles/cy8v8k8mlego",
    },
    {
      id: 6,
      title: "The 'toughest crop': Can tech help cardamom farmers?",
      description: "\"People often think cardamom is a lucrative crop - it may be. But it's also the toughest crop a farmer can cultivate,\" says Stanley Pothan, who has been farming cardamom in the southern Indian state of Kerala for decades.",
      image: "https://ichef.bbci.co.uk/news/800/cpsprodpb/2a17/live/a6d41a10-b3eb-11f0-b2a1-6f537f66f9aa.jpg.webp",
      link: "https://www.bbc.com/news/articles/cn0g2xxnrj3o",
    },
    {
      id: 7,
      title: "US approves $93m arms sale to India as trade tensions ease",
      description: "The US has approved two arms sales to India worth $92.8m (£71m), including Javelin anti-tank missiles and Excalibur precision artillery projectiles, the US state department says.",
      image: "https://ichef.bbci.co.uk/news/800/cpsprodpb/6517/live/e2de7ca0-c5f0-11f0-9f1e-75cdd6519717.jpg.webp",
      link: "https://www.bbc.com/news/articles/cdeger2k625o",
    },
    {
      id: 8,
      title: "Delhi's alleged car bomb attacker named by investigators",
      description: "Indian investigators have named the man who they claim was driving the car that blew up last Monday near the landmark Red Fort monument in the capital Delhi.",
      image: "https://ichef.bbci.co.uk/news/800/cpsprodpb/228d/live/71f98da0-c39c-11f0-a624-43243f904594.jpg.webp",
      link: "https://www.bbc.com/news/articles/cdeg85ng5n1o",
    },
    {
      id: 9,
      title: "Man arrested over deadly Delhi car bomb attack",
      description: "A man has been arrested in connection with a deadly car bomb attack that killed eight people and wounded 20 others in Delhi last week, authorities have said.",
      image: "https://ichef.bbci.co.uk/news/800/cpsprodpb/4366/live/7eead4d0-c304-11f0-bdc1-a928b34ade94.jpg.webp",
      link: "https://www.bbc.com/news/articles/clyk0nd1nq6o",
    },
    {
      id: 10,
      title: "Why tech giants are offering premium AI tools to millions of Indians for free",
      description: "Starting this week, millions of Indians will get one year of free access to ChatGPT's new, low-cost \"Go\" AI chatbot.",
      image: "https://ichef.bbci.co.uk/news/800/cpsprodpb/03c9/live/f0bae610-b9f2-11f0-b7a6-fd0b59da7243.jpg.webp",
      link: "https://www.bbc.com/news/articles/c14pr0enjr6o",
    },
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "50px", marginBottom: "32px", fontWeight: "600", textAlign: "center" }}>
        NEWS BLOG
      </h1>

      <div style={{ display: "grid", gap: "20px" }}>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "16px",
              background: "#fff",
            }}
          >
            <img
              src={post.image}
              alt={post.title}
              style={{ width: "100%", borderRadius: "6px" }}
            />

            <h2 style={{ marginTop: "12px", fontSize: "32px" }}>{post.title}</h2>

            <p style={{ marginTop: "-25px", color: "#555" }}>{post.description}</p>

            <a
              href={post.link}
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                marginTop: "-25px",
                display: "inline-block",
                padding: "8px 14px",
                background: "black",
                color: "white",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              Read More...
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
