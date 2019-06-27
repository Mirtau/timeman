import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Time Management Goal Setter</h1>
      <Link style={linkStyle} to='/'>Home</Link> | <Link style={linkStyle} to='/about'>About</Link>
    </header>
  )
};

const headerStyle = {
  background: '#8B008B',
  color: '#40E0D0',
  textAlign: 'center',
};
const linkStyle = {
  color: '#FF4500',
  textDecoration: 'none',
};
export default Header;
