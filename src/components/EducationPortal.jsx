import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

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

const FeatureCard = ({ title, description, icon, path }) => (
  <Link
    to={path}
    className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center h-full cursor-pointer hover:shadow-xl transition-shadow duration-300"
  >
    <div className="text-teal-500 mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-tealBlue">{title}</h3>
    <p className="text-gray">{description}</p>
  </Link>
);

const EducationPortal = () => {
  const sections = [
    {
      title: "Videos & Documentaries",
      description: "Watch informative videos on water conservation and gender equality",
      icon: <img src="/video.png" alt="Videos" className="w-16 h-16" />,
      path: "/education/videos"
    },
    {
      title: "Articles & Case Studies",
      description: "Read in-depth articles and real-world case studies",
      icon: <img src="/article.png" alt="Articles" className="w-16 h-16" />,
      path: "/education/articles"
    },
    {
      title: "Podcasts",
      description: "Listen to engaging discussions on environmental issues",
      icon: <img src="/podcast.png" alt="Podcasts" className="w-16 h-16" />,
      path: "/education/podcasts"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-lightGray">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-tealBlue">Education Portal</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <FeatureCard key={index} {...section} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationPortal;