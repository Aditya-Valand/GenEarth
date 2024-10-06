import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import ArticleTile from './ArticleTile';
const Navbar = () => {
    const { logout } = useAuth0();
  
    return (
      <nav className="bg-customTeal text-white py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="text-4xl font-bold">GenEarth</div>
          <div className="flex space-x-6">
            <a href="/" className="hover:text-teal-400 transition my-1 duration-300 text-xl font-semibold">
              Home
            </a>
            <a href="/about" className="hover:text-teal-400 transition my-1 duration-300 text-xl font-semibold">
              About Us
            </a>
            <button
              className="bg-lightGray text-customTeal px-5 py-2 rounded transition duration-300 text-lg font-semibold shadow-md"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    );
  };


const ArticlesCaseStudies = () => {
    const articles = [
        { title: "WATER CRISIS IN INDIAN CITIES: A SYSTEMIC FAILURE OR WRATH OF CHANGING CLIMATE", url: "https://nidm.gov.in/PDF/pubs/NIDM_WCIC22.pdf" },
        { title: "The role of water technology in development: a case study of Gujarat State, India", url: "https://www.un.org/waterforlifedecade/green_economy_2011/pdf/session_5_technology_cases_india.pdf" },
        { title: "भारत में बढ़ता जल संकट", url: "https://www.drishtiias.com/hindi/daily-updates/daily-news-editorials/growing-water-stress-in-india" },
        { title: "Water crisis: दिल्ली से बेंगलुरु तक... क्यों सूख रहा महानगरों का गला? कभी कुओं में था पानी आज बोतलों में बिक रहा", url: "https://www.jagran.com/news/national-ncr-why-is-the-water-crisis-in-metropolitan-cities-from-delhi-to-bengaluru-kolkata-chennai-hyderabad-sound-of-great-water-trouble-in-india-23738908.html" },
        { title: "Water crisis: दिल्ली से बेंगलुरु तक... क्यों सूख रहा महानगरों का गला? कभी कुओं में था पानी आज बोतलों में बिक रहा", url: "https://www.jansatta.com/national/water-crisis-banglore-water-scarcity-india-problem-solution-analysis/3257796/" },
        { title: "World Water Day: सात साल में होगा बड़े जल संकट से सामना, समझिए वॉटर मैनेजमेंट में कहां हैं हम", url: "https://www.tv9hindi.com/knowledge/world-water-day-if-we-are-not-careful-we-will-face-the-biggest-water-crisis-in-history-au464-1781038.html" },
        { title: "\"बिना नहाए स्कूल जाना पड़ता है\": दक्षिण अफ्रीका में पानी के संकट को लेकर लोगों में आक्रोश", url: "https://ndtv.in/world-news/have-to-go-to-school-without-bath-s-africans-furious-over-water-crisis-ndtv-hindi-ndtv-india-3750940" },
        { title: "Water Crisis in Jharkhand: आने वाली पीढ़ी के लिए हो जाइए सर्तक... लगातार नीचे जा रहा जलस्तर, कई इलाकों में गंभीर संकट", url: "https://www.jagran.com/jharkhand/ranchi-jharkhand-water-crisis-water-level-fall-down-in-ranchi-people-need-to-alert-for-water-and-environmental-protection-jagran-special-22719686.html" }
    ];
  return (
    <div className="min-h-screen flex flex-col bg-lightGray">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-tealBlue">Articles & Case Studies</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleTile key={index} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesCaseStudies;