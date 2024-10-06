import React from 'react';

const ArticleTile = ({ title, url }) => (
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full"
  >
    <h3 className="text-xl font-bold text-tealBlue mb-2 line-clamp-2">{title}</h3>
    <div className="flex justify-between items-center mt-4">
      <p className="text-gray-600">Click to read more</p>
      <img src="/inner-article.png" alt="Read article" className="w-9 h-9" />
    </div>
  </a>
);

export default ArticleTile;