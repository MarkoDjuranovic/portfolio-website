// SocialIcons.js

import React from 'react';
import './socialicons.css';

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://www.linkedin.com/in/marko-djuranovic/" target="_blank" rel="noopener noreferrer">
        <img src="linkedin.png" alt="LinkedIn" />
      </a>
      <a href="https://github.com/MarkoDjuranovic" target="_blank" rel="noopener noreferrer">
        <img src="git.png" alt="GitHub" />
      </a>
      {/* Add more social icons as needed */}
      <a href="https://www.instagram.com/djuranovic_m/" target="_blank" rel="noopener noreferrer">
        <img src="instagram.png" alt="Instagram" />
      </a>
    </div>
  );
};

export default SocialIcons;
