import React, { useState } from 'react'
import '../CSS/Movies.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


function Movies() {
    
    const [activeCategory, setActiveCategory] = useState('nowPlaying')

    const handleCategoryClick = (category) => {
        setActiveCategory(category)
    }

    let posterSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true,
        centerMode: false,
        centerPadding: '0%'
    }

  return (
    <div className='movies'>
        <div className="movies__links">
            <h3>Movies at Panther Pictures</h3>
            <ul>
                {/* CLASS NAME PSEUDO: IT HAS A CLASS NAME OF CATEGORY AND IT HAS A CLASSNAME OF ACTIVE CATEGORY.
                IF ACTIVECATEGORY = NOWPLAYING SET THE CLASS NAME TO ACTIVE, OTHERWISE LEAVE THE CLASSNAME BLANK */}
                <li className={`category ${activeCategory === 'nowPlaying' ? 'active' : ''}`}>
                        {/* ON CLICK, CHANGE THE HANDLECATEGORYCLICK TO NOWPLAYING  */}
                    <a onClick={() => handleCategoryClick('nowPlaying') }>Now Playing</a>
                </li>



                <li className={`category ${activeCategory === 'comingSoon' ? 'active' : ''} `}>
                    <a onClick={() => handleCategoryClick('comingSoon')}>Coming Soon</a>
                </li>
            </ul>
            <hr></hr>
        </div>

        <div className="movies__displayed">

            {activeCategory === 'nowPlaying' ? (
                <>
                    <div className="now__Playing">
                        <img src="images/antman-poster.png" alt="antman" />
                        <h2>Ant-Man and the Wasp: Quantumania</h2>
                        <h4>PG-13 2023 ‧ Action/Adventure ‧ 2h 5m</h4>
                        <p>
                            Super Heroes Scott Lang (Paul Rudd) and Hope Van Dyne (Evangeline Lilly) return to continue their adventures as Ant-Man and The Wasp. 
                            Together, with Hope’s parents Janet Van Dyne (Michelle Pfeiffer) and Hank Pym (Michael Douglas), and Scott’s daughter Cassie Lang (Kathryn Newton), 
                            the family finds themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible. 
                            Directed by Peyton Reed and produced by Kevin Feige and Stephen Broussard, “Ant-Man and The Wasp: Quantumania” also stars Jonathan Majors as Kang, 
                            David Dastmalchian as Veb, Katy O'Brian as Jentorra, William Jackson Harper as Quaz and Bill Murray as Lord Krylar. The sci-fi adventure opens in theaters on Feb. 17, 2023.
                        </p>
                        <button>Get Tickets</button>
                    </div>
                </>
            ) : (
                <img src='images/creed-poster.png' alt='' />
            )}

        </div>
        

    </div>
  )
}

export default Movies
