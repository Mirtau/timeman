import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Time Management Goal Setter</h1>
    </header>
  )
};

const headerStyle = {
  background: '#8B008B',
  color: '#40E0D0',
  textAlign: 'center'
};
export default Header;
