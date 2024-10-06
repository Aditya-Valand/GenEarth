import {React, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const FeatureCard = ({ title, description, icon, onClick }) => (
  <div 
    className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center h-full cursor-pointer hover:shadow-xl transition-shadow duration-300"
    onClick={onClick}
  >
    <div className="text-teal-500 mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-tealBlue">{title}</h3>
    <p className="text-gray">{description}</p>
  </div>
);

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

const Dashboard = () => {
  const navigate = useNavigate();
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    // Simulated data for the graph
    const simulatedData = [
      { year: 2010, climateChangeIndex: 20, genderInequalityIndex: 40 },
      { year: 2012, climateChangeIndex: 25, genderInequalityIndex: 38 },
      { year: 2014, climateChangeIndex: 30, genderInequalityIndex: 35 },
      { year: 2016, climateChangeIndex: 35, genderInequalityIndex: 33 },
      { year: 2018, climateChangeIndex: 40, genderInequalityIndex: 30 },
      { year: 2020, climateChangeIndex: 45, genderInequalityIndex: 28 },
    ];
    setGraphData(simulatedData);
  }, []);

  const features = [
    { 
      title: "Data Visualization", 
      description: "Interactive maps and graphs showing water scarcity and gender inequality indicators", 
      icon: <img src="/data-viz.png" alt="Data Visualization" className="w-16 h-16" />,
      onClick: () => navigate('/data-viz')
    },
    { 
      title: "Incident Reporting", 
      description: "Report and track incidents of women affected by water scarcity", 
      icon: <img src="/report.png" alt="Incident Reporting" className="w-16 h-16" />,
      onClick: () => navigate('/report')
    },
    { 
      title: "Education Portal", 
      description: "Interactive modules on water conservation and women's empowerment", 
      icon: <img src="/education.png" alt="Education" className="w-16 h-16" />,
      onClick: () => navigate('/education')
    },
    { 
      title: "Community Forum", 
      description: "Platform for local women to share experiences and support", 
      icon: <img src="/community.png" alt="Community" className="w-16 h-16" />,
      onClick: () => navigate('/comingsoon')
    },
    { 
      title: "Earn Carbon Credits", 
      description: "Platform to earn carbon credits by reporting incidents and spreading conscious awareness about GenEarth", 
      icon: <img src="/coins.png" alt="coins" className="w-16 h-16" />,
      onClick: () => navigate('/comingsoon')
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-lightGray">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-tealBlue">Dashboard</h1>
        
        <div className="mb-12">
          <h2 className="text-3xl font-bold mx-3 mb-4 text-tealBlue">Climate Change and Gender Inequality Trends</h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={graphData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="climateChangeIndex" stroke="#8884d8" name="Climate Change Index" />
              <Line type="monotone" dataKey="genderInequalityIndex" stroke="#82ca9d" name="Gender Inequality Index" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <h2 className="text-4xl font-bold mx-3 mb-4 text-tealBlue">Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <FeatureCard  key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;