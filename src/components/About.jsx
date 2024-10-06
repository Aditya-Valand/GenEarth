/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <nav className="bg-customTeal text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="text-4xl font-bold">GenEarth</div>
        <div className="flex space-x-6">
          <a href="/" className="hover:text-teal-400 transition my-1 duration-300 text-xl font-semibold">
            Home
          </a>
          <a href="#" className="hover:text-teal-400 transition my-1 duration-300 text-xl font-semibold">
            Dashboard
          </a>
          <a href="#" className="hover:text-teal-400 transition my-1 duration-300 text-xl font-semibold">
            Our Predictions
          </a>
          <a href="/about" className="hover:text-teal-400 transition my-1 duration-300 text-xl font-semibold">
            About Us
          </a>

          {isAuthenticated ? (
            <button
              className="bg-lightGray text-customTeal px-5 py-2 rounded transition duration-300 text-lg font-semibold shadow-md"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Logout
            </button>
          ) : (
            <button
              className="bg-lightGray text-customTeal px-5 py-2 rounded transition duration-300 text-lg font-semibold shadow-md"
              onClick={() => loginWithRedirect()}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

const MissionStatement = () => (
  <div className="bg-lightGray text-tealBlue py-20">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Mission</h1>
      <p className="text-xl mb-8 text-center max-w-3xl mx-auto">
        GenEarth is dedicated to empowering women through sustainable water management practices. 
        We strive to bridge the gap between water scarcity and gender equality, creating lasting 
        change in communities around the world.
      </p>
    </div>
  </div>
);

const TeamMember = ({ name, role, bio, image }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
    <img src={image} alt={name} className="w-32 h-32 rounded-full mb-4" />
    <h3 className="text-xl font-bold mb-2 text-tealBlue">{name}</h3>
    <p className="text-customTeal mb-4">{role}</p>
    <p className="text-gray text-center">{bio}</p>
  </div>
);

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Aisha Patel",
      role: "Founder & CEO",
      bio: "With over 15 years of experience in environmental science, Aisha founded GenEarth to address the critical intersection of water scarcity and gender inequality.",
      image: "/aisha.jpg"
    },
    {
      name: "Dr. Rahul Sharma",
      role: "Chief Technology Officer",
      bio: "Rahul leads our tech initiatives, developing innovative solutions for water management and data visualization.",
      image: "/rahul.jpg"
    },
    {
      name: "Maya Singh",
      role: "Community Outreach Director",
      bio: "Maya works directly with local communities, ensuring our programs meet the real needs of women affected by water scarcity.",
      image: "/maya.jpg"
    },
    {
      name: "Alex Chen",
      role: "Data Scientist",
      bio: "Alex applies machine learning techniques to predict water scarcity trends and measure the impact of our interventions.",
      image: "/alex.jpg"
    }
  ];

  return (
    <div className="bg-tealBlue py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-lightGray">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

const OurApproach = () => (
  <div className="bg-lightGray py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-tealBlue">Our Approach</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-4 text-customTeal">Data-Driven Solutions</h3>
          <p className="text-gray">
            We leverage cutting-edge technology and data analysis to identify areas of critical need 
            and measure the impact of our interventions. This approach allows us to allocate resources 
            efficiently and continuously improve our programs.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-4 text-customTeal">Community Engagement</h3>
          <p className="text-gray">
            We believe that sustainable change comes from within communities. Our programs are 
            designed in collaboration with local women leaders, ensuring that solutions are 
            culturally appropriate and address the unique challenges of each region.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-4 text-customTeal">Education and Empowerment</h3>
          <p className="text-gray">
            Knowledge is power. We provide comprehensive education on water conservation, 
            management, and related technologies. By empowering women with this knowledge, 
            we enable them to take leadership roles in water management within their communities.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-4 text-customTeal">Sustainable Technologies</h3>
          <p className="text-gray">
            We implement and promote the use of sustainable, low-cost water technologies that can be 
            easily maintained by local communities. This approach ensures long-term access to clean 
            water and reduces the burden on women and girls traditionally responsible for water collection.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-lightGray text-gray py-10">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <h3 className="text-3xl font-bold mb-4 text-gray">GenEarth</h3>
        <p className="text-lg">Empowering women through sustainable water management.</p>
      </div>
      <div>
        <h4 className="font-bold mb-4">Quick Links</h4>
        <ul className="space-y-2">
          <li><a href="/" className="hover:text-teal-400 transition duration-300">Home</a></li>
          <li><a href="/dashboard" className="hover:text-teal-400 transition duration-300">Data Dashboard</a></li>
          <li><a href="/report" className="hover:text-teal-400 transition duration-300">Report Incident</a></li>
          <li><a href="/forum" className="hover:text-teal-400 transition duration-300">Community Forum</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-4">Contact Us</h4>
        <p>Email: info@genearth.org</p>
        <p>Phone: (123) 456-7890</p>
      </div>
      <div>
        <h4 className="font-bold mb-4">Follow Us</h4>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-teal-400 transition duration-300">Facebook</a>
          <a href="#" className="hover:text-teal-400 transition duration-300">Twitter</a>
          <a href="#" className="hover:text-teal-400 transition duration-300">Instagram</a>
        </div>
      </div>
    </div>
  </footer>
);

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <MissionStatement />
      <OurTeam />
      <OurApproach />
      <Footer />
    </div>
  );
};

export default About;