import React, { useState } from 'react'
import '../CSS/BurgerMenu.css'
import MenuIcon from '@mui/icons-material/Menu';


function BurgerMenu() {

    const [burger__class, setBurgerClass] = useState('burger__bar unclicked')
    const [menu__class, setMenuClass] = useState('menu hidden')
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass('burger__bar clicked')
            setMenuClass('menu visible')
        }
        else {
            setBurgerClass('burger__bar unlicked')
            setMenuClass('menu hidden')
        }
    }

  return (
    <div className='burgerMenu'>
        <div className="burgerMenu__Container">
            <div className="burgerMenu__left">
                <a className='logo' href='#'>
                    <img src="/Images/Logo.png" alt="" />
                </a>
            </div>

            <div className='burgerMenu__right'>
                {/* <MenuIcon style={{ color: '#8AB8FF', fontSize: '3em' }} /> */}
                <MenuIcon style={{
                    color: '#8AB8FF',
                    fontSize: '3em'
                }} />

                <div className={`navbar__link ${burger__class}`} onClick={updateMenu} ><a href=''>HOME</a></div>
                <div className="navbar__link nav2"><a href=''>NOW SHOWING</a></div>
                {/* <div className="navbar__link"><a href=''>JOIN THE TEAM</a></div> */}
                <div className="navbar__link nav3"><a href=''>ADVERTISEMENT</a></div>
                <div className="navbar__link nav4"><a href=''>THEATER RENTAL</a></div>
            </div>
        </div>
    </div>
  )
}

export default BurgerMenu
