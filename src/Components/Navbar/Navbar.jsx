import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/image.png'
import MobileNav from '../MobileNav/MobileNav';

export const Navbar = () => {

    const [openMenu, setOpenMenu] = useState (false);

    const toggleMenu = () => {
      setOpenMenu(!openMenu)
    }

  return (
    <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

        <nav className='nav-wrapper'>
            <div className='nav-content'>
                <img className='logo' src={logo} alt='' />
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
                    <br />
                    <br />
                    <button className='cv-btn' onClick={() => {}}>
                        Download CV
                    </button>
                </ul>

                <button className='menu-btn' onClick={toggleMenu}>
                    <span className={'material-symbols-outlined'} style={{ fontSize: '1.8rem' }}>
                        {openMenu ? "close" : "menu"}
                    </span>
                </button>
            </div>
        </nav>
    </>
  )
}
