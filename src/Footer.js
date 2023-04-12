import React from 'react'

const Footer = () => {
  return (
    <div>
    <footer>
    <div className='waves'>
      <div className='wave' id="wave1"></div>
      <div className='wave' id="wave2"></div>
      <div className='wave' id="wave3"></div>
      <div className='wave' id="wave4"></div>
    </div>
        <ul className='social_icon'>
            <li><a href='/'><ion-icon name="logo-github"></ion-icon></a></li>
            <li><a href='/'><ion-icon name="logo-instagram"></ion-icon></a></li>
            <li><a href='/'><ion-icon name="logo-linkedin"></ion-icon></a></li>
            <li><a href='/'><ion-icon name="mail-outline"></ion-icon></a></li>
        </ul>
        <ul className='menu'>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>About</a></li>
            <li><a href='/'>Services</a></li>
            <li><a href='/'>Team</a></li>
            <li><a href='/'>Contact</a></li>
        </ul>
        <p>©2023 Neversettle world 67 | All Rights Reserved</p>
    </footer>
       
    </div>
  )
}

export default Footer
