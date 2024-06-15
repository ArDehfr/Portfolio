import React from 'react'
import './MobileNav.css'
import logo from '../Assets/image.png'

const MobileNav = ({ isOpen, toggleMenu }) => {

  return (
    <>
        <div 
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
        >
          
          <div className='mobile-menu-container'>
            <img src={logo} alt="" />
            <ul>
                    <li>
                        <a href="" className="menu-item">Home</a>
                    </li>
                    <li>
                        <a href="" className="menu-item">Skills</a>
                    </li>
                    <li>
                        <a href="" className="menu-item">Projects</a>
                    </li>
                    <li>
                        <a href="" className="menu-item">Contact</a>
                    </li>
                    <button className='cv-btn' onClick={() => {}}>
                        Download CV
                    </button>
            </ul>
          </div>
        </div>
    </>
  );
};

export default MobileNav