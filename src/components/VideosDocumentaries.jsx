import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import VideoTile from './VideoTile';
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


const VideosDocumentaries = () => {
  const videos = [
    { title: "'Tapak Tapak' - A Short Film on Water Conservation", url: "https://www.youtube.com/watch?v=Mq30zL031LQ" },
    { title: "Explained | World's Water Crisis | FULL EPISODE | Netflix", url: "https://youtu.be/C65iqOSCZOY?si=PQz5222q39MQaYz1" },
    { title: "Last drop - short film | Save water | Shots Pictures", url: "https://youtu.be/t6FiJr_J1qI?si=Hwt8WePs2YujeaDa" },
    { title: "When Every Drop Counts (Hindi version): A documentary on the legacy of rainwater harvesting", url: "https://youtu.be/WxdtmswwHAk?si=EdeIxP-d7SVtBZkU" },
    { title: "Save Water Awareness Animation short film 2016", url: "https://youtu.be/9yqejA041Z8?si=Y1YN5VM3ejPEqqnC" },
    { title: "water conservation I जल संरक्षण I Water conservation क्यूँ जरूरी है।", url: "https://youtu.be/5DUL5p41pUw?si=KU_1EDfXFlqVeDva" },
    { title: "Boond (A Drop of Water)", url: "https://youtu.be/8ZV_yFMeC8w?si=TpQUQ3DAi026Npdm" },
    { title: "\"Save Us\" - Our First Short Film", url: "https://youtu.be/aCa9UArRDLo?si=Ulgpvlm8y_4FSf9J" },
    { title: "भारत में जल संकट (Water Crisis) पानी के प्रबंधन और उपयोग में बदलाव की ज़रूरत हैं । *Hindi Documentary", url: "https://youtu.be/BCDpaX8ghFE?si=VN1ciOMrRQl3kp5t" },
    { title: "Save Water Public Awareness Video", url: "https://youtu.be/CDqtY-nuJpg?si=POJXiOfN8wHqUnWW" },
    { title: "WATER SHORT FILM 2019 || DIRECTED BY SHANKAR || SAVE WATER", url: "https://youtu.be/KxfSxdyZfPQ?si=btsRlFwqc_EZvFEz" }
];

  return (
    <div className="min-h-screen flex flex-col bg-lightGray">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-tealBlue">Videos & Documentaries</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <VideoTile key={index} {...video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideosDocumentaries;