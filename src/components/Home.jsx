

/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */

//#1995AD, #A1D6E2, #F1F1F2

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';  // Importing Auth0 hooks
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { Alert, AlertTitle } from './ui/Alert'; // Use relative path
import { useState } from 'react';
const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  
  // State to manage alert visibility
  const [showAlert, setShowAlert] = useState(false);

  const handleDashboardClick = () => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      // Show alert when user is not authenticated
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false); // Hide alert after 3 seconds
      }, 3000);
    }
  };

  return (
    <nav className="bg-customTeal text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="text-4xl font-bold">GenEarth</div>
        <div className="flex space-x-6">
        <button onClick={handleDashboardClick} className="hover:text-teal-400 transition my-0 duration-300 text-xl font-semibold">
        Dashboard
      </button>
          <a href="/comingsoon" className="hover:text-teal-400 transition my-1 duration-300 text-xl font-semibold">
            Our Predictions
          </a>
          <a href="/about" className="hover:text-teal-400 transition my-1 duration-300 text-xl font-semibold">
            About Us
          </a>

          {/* Auth Button */}
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
      
      {showAlert && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50">
          <Alert variant="default">
            <AlertTitle>Please log in to access the Dashboard</AlertTitle>
          </Alert>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <div className="bg-lightGray text-tealBlue py-20">
    <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
      <div className="w-full lg:w-1/2 pr-0 lg:pr-10 mb-10 lg:mb-0">
        <h3 className="text-3xl font-bold mb-6">Empowering Women, Conserving Water, Building A Better Tomorrow.</h3>
        <p className="text-xl mb-8">GenEarth: Bridging the gap between water scarcity and gender equality. Join our initiative to create sustainable change.</p>
        <button className="bg-customTeal text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300">Get Involved</button>
      </div>
      <div className="lg:w-1/2 ml-23 flex justify-center">
        <div className="w-full h-full max-w-md p-2 bg-gray-290 rounded-lg shadow-lg flex items-center justify-center">
          <div className="w-full h-full bg-gray-300 rounded-lg  relative">
            <video
              className="w-full h-full object-fill rounded-lg"
              src="/WaterConservation.mp4"
              autoPlay
              loop
              muted
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FeatureCard = ({ title, description, icon }) => (
  <div className="bg-lightGray rounded-lg shadow-lg p-6 flex flex-col items-center text-center h-full cursor-pointer hover:shadow-xl transition-shadow duration-300">
    <div className="text-teal-500 mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-tealBlue">{title}</h3>
    <p className="text-gray">{description}</p>
  </div>
);
const Features = () => {
  const features = [
    { title: "Data Visualization", description: "Interactive maps and graphs showing water scarcity and gender inequality indicators", icon: <img src="/data-viz.png" alt="Data Visualization" className="w-16 h-16" /> },
    { title: "Incident Reporting", description: "Report and track incidents of women affected by water scarcity", icon: <img src="/report.png" alt="Incident Reporting" className="w-16 h-16" /> },
    { title: "Education Portal", description: "Interactive modules on water conservation and women's empowerment", icon: <img src="/education.png" alt="Education" className="w-16 h-16" /> },
    { title: "Community Forum", description: "Platform for local women to share experiences and support", icon: <img src="/community.png" alt="Community" className="w-16 h-16" /> },
    { title: "Earn Carbon Credits", description: "Platform to earn carbon credits by reporting incidents and spreading concious awareness about the GenEarth.", icon: <img src="/coins.png" alt="Resource Center" className="w-16 h-16" /> },
  ];

  return (
    <div className="bg-tealBlue pt-12 pb-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-lightGray">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ name, role, testimonial, image }) => (
  <div className="bg-lightGray rounded-lg shadow-lg p-6">
    <p className="text-tealBlue italic font-bold mb-4">"{testimonial}"</p>
    <div className="flex items-center">
      <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <h4 className="font-semibold text-gray">{name}</h4>
        <p className="text-blue-600">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <div className="bg-tealBlue py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-8 text-lightGray">Impact Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TestimonialCard
          name="Priya Sharma"
          role="Village Leader"
          testimonial="GenEarth has transformed our community. Women now have more time for education and work, thanks to improved water access."
          image="/priya.jpg"
        />
        <TestimonialCard
          name="Dr. Anita Desai"
          role="Water Resource Expert"
          testimonial="The data visualization tools have been instrumental in shaping effective policies for water management and gender equality."
          image="/anita.jpg"
        />
        <TestimonialCard
          name="Rajesh Meena"
          role="Local Farmer"
          testimonial="Thanks to the water conservation techniques I learned through GenEarth, our farm's productivity has increased, benefiting the whole family."
          image="/rajesh.jpg"
        />
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
          <li><a href="#" className="hover:text-teal-400 transition duration-300">Home</a></li>
          <li><a href="#" className="hover:text-teal-400 transition duration=300">Data Dashboard</a></li>
          <li><a href="#" className="hover:text-teal-400 transition duration=300">Report Incident</a></li>
          <li><a href="#" className="hover:text-teal-400 transition duration=300">Community Forum</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb=4">Contact Us</h4>
        <p>Email: GenEarth@gmail.com </p>
        <p>Phone: (0141) 1234567</p>
      </div>
      <div>
        <h4 className="font-bold mb=4">Follow Us</h4>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-teal-400 transition duration-300">Facebook</a>
          <a href="#" className="hover:text-teal-400 transition duration-300">Twitter</a>
          <a href="#" className="hover:text-teal-400 transition duration-300">Instagram</a>
        </div>
      </div>
    </div>
  </footer>
);

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
