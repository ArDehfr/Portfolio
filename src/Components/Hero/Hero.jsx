import React from 'react'
import './Hero.css'
import foto from '../Assets/malik.jpg'
import react from '../Assets/logo512.png'
import rpl from '../Assets/image-removebg-preview (1).png'
import tb from '../Assets/image-removebg-preview (2).png'

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h2>Hi, i'm <span className='span'>Malik Arifin</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur alias quibusdam quas architecto! Dolorum laudantium asperiores ratione rerum atque commodi! Ad officia at quidem aspernatur provident quia vel minus doloremque?</p>
            <br />
            <button className='cv-btn'>Download CV</button>
        </div>

        <div className="hero-img">
            <div>
                <img src={foto} alt="" className='abc bca' />
            </div>

            <div>
                <div className="tech-icon">
                    <img className='' src={tb} alt="" />
                </div>
                <div className="tech-icon">
                    <img className='App-logo' src={react} alt="" />
                </div>
                <div className="tech-icon">
                    <img className='' src={rpl} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero