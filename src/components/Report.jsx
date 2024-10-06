import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { AlertCircle } from 'lucide-react';
import axios from 'axios'
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
          <a href="/dashboard" className="hover:text-teal-400 transition my-1 duration-300 text-xl font-semibold">
            Dashboard
          </a>
          <a href="/predictions" className="hover:text-teal-400 transition my-1 duration-300 text-xl font-semibold">
            Our Predictions
          </a>
          <a href="/about" className="hover:text-teal-400 transition my-1 duration-300 text-xl font-semibold">
            About Us
          </a>
          <a href="/report" className="hover:text-teal-400 transition my-1 duration-300 text-xl font-semibold">
            Report Incident
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

const IncidentReportForm = () => {
    const [formData, setFormData] = useState({
      reporterName: '',
      mobileNumber: '',
      dateOfIncident: '',
      timeOfIncident: '',
      locationOfIncident: '',
      description: '',
      impactOnWomen: '',
      numberOfPeopleAffected: '',
      waterSourceType: '',
      estimatedWaterLoss: '',
      actionsTaken: '',
      assistanceNeeded: '',
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post('/api/reports', formData);
        alert('Your incident report has been submitted successfully. Thank you for your contribution.');
        setFormData({
          reporterName: '',
          mobileNumber: '',
          dateOfIncident: '',
          timeOfIncident: '',
          locationOfIncident: '',
          description: '',
          impactOnWomen: '',
          numberOfPeopleAffected: '',
          waterSourceType: '',
          estimatedWaterLoss: '',
          actionsTaken: '',
          assistanceNeeded: '',
        });
      } catch (error) {
        console.error('Error submitting report:', error);
        alert('There was an error submitting your report. Please try again.');
      }
    };

  return (
    
        <div className="bg-lightGray py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center text-tealBlue">Report An Incident</h1>
            
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reporterName">
              Reporter Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="reporterName"
              type="text"
              name="reporterName"
              value={formData.reporterName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobileNumber">
              Mobile Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mobileNumber"
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dateOfIncident">
              Date of Incident
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="dateOfIncident"
              type="date"
              name="dateOfIncident"
              value={formData.dateOfIncident}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="timeOfIncident">
              Time of Incident
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="timeOfIncident"
              type="time"
              name="timeOfIncident"
              value={formData.timeOfIncident}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="locationOfIncident">
              Location of Incident
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="locationOfIncident"
              type="text"
              name="locationOfIncident"
              value={formData.locationOfIncident}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Description of Incident
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="4"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="impactOnWomen">
              Impact on Women
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="impactOnWomen"
              name="impactOnWomen"
              value={formData.impactOnWomen}
              onChange={handleInputChange}
              rows="4"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numberOfPeopleAffected">
              Number of People Affected
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="numberOfPeopleAffected"
              type="number"
              name="numberOfPeopleAffected"
              value={formData.numberOfPeopleAffected}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="waterSourceType">
              Water Source Type (if required) 
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="waterSourceType"
              name="waterSourceType"
              value={formData.waterSourceType}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a water source </option>
              <option value="well">Well</option>
              <option value="river">River</option>
              <option value="lake">Lake</option>
              <option value="tapWater">Tap Water</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="estimatedWaterLoss">
              Estimated Water Loss (in liters) (if any)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="estimatedWaterLoss"
              type="number"
              name="estimatedWaterLoss"
              value={formData.estimatedWaterLoss}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="actionsTaken">
              Actions Taken (if any)
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="actionsTaken"
              name="actionsTaken"
              value={formData.actionsTaken}
              onChange={handleInputChange}
              rows="4"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="assistanceNeeded">
              Assistance Needed
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="assistanceNeeded"
              name="assistanceNeeded"
              value={formData.assistanceNeeded}
              onChange={handleInputChange}
              rows="4"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photos">
              Photos (if any)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="photos"
              type="file"
              name="photos"
              onChange={handleInputChange}
              accept="image/*"
              multiple
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="videos">
              Videos (if any)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="videos"
              type="file"
              name="videos"
              onChange={handleInputChange}
              accept="video/*"
              multiple
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="documents">
              Documents (if any)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="documents"
              type="file"
              name="documents"
              onChange={handleInputChange}
              accept=".pdf,.doc,.docx,.txt"
              multiple
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-customTeal hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


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

  
const Report = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <IncidentReportForm/>
        <Footer />
      </div>
    );
  };
  
  export default Report;