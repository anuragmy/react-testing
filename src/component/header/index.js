import React from 'react';
import './styles.scss';
import Logo from './../../assets/graphics/logo.png';

const Header = (props) => {
  return (
    <header data-test="headerComponent" className="head">
      <div className="wrap">
        <div className="logo">
          <img data-test="logoIMG" src={Logo} alt="Logo" />
        </div>
      </div>
    </header>
  )
};

export default Header;