import React from 'react';
import "./Header.css";

function Header() {
  return <div className="header">
    <div className="header__left">
      <img 
        src="https://img.icons8.com/color/480/000000/facebook-new.png" 
        alt="facebook"
      />
    </div>

    <div className="header__middle"></div>

    <div className="header__right"></div>
  </div>;
}

export default Header;