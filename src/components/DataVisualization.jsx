import React from 'react';
import CorrelationChart from './CorrelationChart';
import ScatterPlot from './ScatterPlot';
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


const DataVisualization = ({ csvFilePath }) => {
  return (
    <>
    <Navbar />
    <div className="container bg-lightGray mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-tealBlue">Data Visualization Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Correlation Heatmap</h2>
          <div className="aspect-w-16 aspect-h-9">
            <CorrelationChart csvFilePath={csvFilePath} />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Interactive Scatter Plot</h2>
          <div className="aspect-w-16 aspect-h-9">
            <ScatterPlot csvFilePath={csvFilePath} />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default DataVisualization;