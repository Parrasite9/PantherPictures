import React from 'react'
import '../CSS/Navbar.css'


function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbar__container">
              <div className='navbar__left'>
                  <a className='logo' href='#'>
                      <img src="/Images/Logo.png" alt="" />
                  </a>
              </div>

              <div className='navbar__right'>
                  <div className="navbar__link"><a href=''>HOME</a></div>
                  <div className="navbar__link"><a href=''>NOW SHOWING</a></div>
                  {/* <div className="navbar__link"><a href=''>JOIN THE TEAM</a></div> */}
                  <div className="navbar__link"><a href=''>ADVERTISEMENT</a></div>
                  <div className="navbar__link"><a href=''>THEATER RENTAL</a></div>
              </div>
        </div>
    </div>
  )
}

export default Navbar
