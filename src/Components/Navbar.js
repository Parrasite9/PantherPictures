import React, { useEffect, useState } from 'react'
import '../CSS/Navbar.css'
import BurgerMenu from './BurgerMenu'


function Navbar() {

  const [isNavMobile, setNavMobile] = useState(window.innerWidth < 750)

  useEffect(() => {
      function handleResize() {
          setNavMobile(window.innerWidth < 1100)
      }
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {isNavMobile ? (
        <BurgerMenu />
      ) : (
        <div className='navbar'>
          <div className="navbar__container">
                <div className='navbar__left'>
                    <a className='logo' href='#'>
                        <img src="/Images/Logo.png" alt="" />
                    </a>
                </div>

                <div className='navbar__right'>
                    <div className="navbar__link nav1"><a href=''>HOME</a></div>
                    <div className="navbar__link nav2"><a href=''>NOW SHOWING</a></div>
                    {/* <div className="navbar__link"><a href=''>JOIN THE TEAM</a></div> */}
                    <div className="navbar__link nav3"><a href=''>ADVERTISEMENT</a></div>
                    <div className="navbar__link nav4"><a href=''>THEATER RENTAL</a></div>
                </div>
            </div>
        </div>
      )}
    </>
  )
}

export default Navbar
