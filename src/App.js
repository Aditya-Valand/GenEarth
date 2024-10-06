import React from 'react';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react'; 
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard'; 
import ComingSoon from './components/ComingSoon.jsx'
import Report from './components/Report';
import DataViz from './components/DataVisualization.jsx'
import EducationPortal from './components/EducationPortal';
import VideosDocumentaries from './components/VideosDocumentaries';
import Podcasts from './components/Podcasts';
import ArticlesCaseStudies from './components/ArticlesCaseStudies';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './index.css';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const URL = `${window.location.origin}/dashboard`;

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/" />;
}

function App() {
  const csvFilePath = process.env.PUBLIC_URL + '/rajasthan.csv';
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={URL}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route 
            path="/report" 
            element={
              <ProtectedRoute>
                <Report />
              </ProtectedRoute>
            }
          />
            <Route 
            path="/comingsoon" 
            element={
              
                <ComingSoon />
              
            }
          />
          <Route 
            path="/data-viz" 
            element={
              <ProtectedRoute>
                <DataViz csvFilePath={csvFilePath} />
              </ProtectedRoute>
            }
          />
          <Route 
            path="/education" 
            element={
              <ProtectedRoute>
                <EducationPortal />
              </ProtectedRoute>
            }
          />
          <Route 
            path="/education/videos" 
            element={
              <ProtectedRoute>
                <VideosDocumentaries />
              </ProtectedRoute>
            }
          />
          <Route 
            path="/education/podcasts" 
            element={
              <ProtectedRoute>
                <Podcasts />
              </ProtectedRoute>
            }
          />
          <Route 
            path="/education/articles" 
            element={
              <ProtectedRoute>
                <ArticlesCaseStudies />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </Auth0Provider>
  );
}

export default App;