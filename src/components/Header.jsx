import React, { useState } from 'react';
import HeaderCss from '../assets/css/HeaderCss.css';


function Header() {
  return (
      <div className="headerSticky">
        <nav>
          <label id="icon">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <div>
            <h2 className="web-name">Startup</h2>
          </div>
        </nav>
      </div>
  );
}

export default Header;