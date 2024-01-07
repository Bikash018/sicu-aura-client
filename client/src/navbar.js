// Navbar.jsx
import React from 'react';
import logo from "../src/assets/sicu-aura-logo.png"
import title from "../src/assets/sicu-aura-title.png"
import userl from "../src/assets/user.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
  
  const user = {
    name: 'John Doe',
    profileImage: 'path/to/user-image.jpg', 
  };

 
    
 
  


  return (
    <div className="navbar">
      <div className="logo">
      
        <img src={logo} alt="Company Logo" style={{ height: '60px', width: '62px' }}/>
        <img src={title} alt="Company Logo" style={{ height: '30px', width: '130px' }} />
      </div>
      <div className="user-info">
    <img src={userl} alt="User" style={{ height: '60px', width: '62px' }} />
    <p style={{ fontSize: '18px', textAlign: 'center', margin: '0',color :'#FFFFFF' }}>Alex Robinson</p>
    <Link to={"/"}>
    <div className="center-submit "  style={{backgroundColor: 'gray',
    padding: '10px',
    cursor: 'pointer',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',}}>
        Logout
      </div>
      </Link>
    </div>
     
    </div>
  );
};

export default Navbar;
