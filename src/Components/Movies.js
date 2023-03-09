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
        
        {/* OFFERS  */}
        <div className="offers">
            <a><img src='images/ladies.png' alt='ladies Night' /> </a>
            <h2>Ladies Night!</h2>
            <p>Join us for a special evening at Panther Picture on March 10 at 9pm! It's Ladies Night, and we're celebrating with a showing of the classic film "Mike's Last Dance." 
                Bring your own beverages to enjoy during the movie, and strike a pose at our photo booth. 
                Plus, we have some amazing door prizes that you won't want to miss.
                To reserve your spot, give us a call at 432-360-0800, or swing by our box office between 5pm and 9pm. This is a night you won't want to miss!</p>
            <button>Get Tickets</button>

            <a><img src='images/awards.png' alt='awards event' /> </a>
            <h2>Award Party</h2>
            <p>Get ready to celebrate the stars and enjoy an evening of glitz and glamour at Panther Studios' "We're Rolling out the Red Carpet!" Award Show Viewing Party on March 12 at 7pm. And the best part? It's a free event!

                BYOB and bring a dish to share with your fellow party-goers for a potluck extravaganza. Plus, we have some amazing prizes lined up that you can win throughout the night.

                Join us for a night of fun, food, and awards as we watch the biggest stars light up the screen. Don't miss out on this unforgettable event!</p>
                <button>Buy Gift Cards</button>



            <a><img src='images/byobImg.webp' alt='creed offer' /> </a>
            <h2>BYOB POLICY</h2>
            <p>We are excited to announce our new "BYOB" policy for those who are 21 years or older. You are welcome to bring a few drinks to enjoy during the movie, and we'll provide drink cups and sodas at our concession stand for mixing.

                While we want you to have a great time, we also want to maintain a family-friendly atmosphere. So, we kindly request that you drink responsibly and avoid any behavior that could disturb other guests.

                ßThank you for your cooperation in making our movie theater a safe and enjoyable place for all.</p>
                <button>Buy Gift Cards</button>


            <a><img src='images/creedOffer.webp' alt='creed offer' /> </a>
            <h2>Go Toe-to-Toe with the Champ of Taste</h2>
            <p>Get knockout flavor that puts other drinks on the ropes! Order THE UPPER CUT, a title-contending cocktail mixed with a punch of Hennessy Cognac. Swinging into select MacGuffins® Bar locations for a limited time.</p>
            <button>Buy Gift Cards</button>

           
            <a><img src='images/giftCard2.png' alt='gift card' /></a>
            <h2>Panther Gift Cards</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem adipisci corrupti, aspernatur dolorum perspiciatis maiores nisi delectus fuga libero suscipit similique voluptatem excepturi sit magni totam officia nemo dolores. Reiciendis?
            </p>
            <button>Buy Gift Cards</button>
            
            <h3>SEE MORE OFFERS & PROMOTIONS &gt;</h3>
            <hr />


        </div>

        {/* <div className='body__movie__slider'>
            <Slider {...posterSettings}>
                <div className='slider__Item__poster'>
                    <a href="">
                        <img src="/Images/antman-poster.png" alt="" className="slider__Img__Poster" />
                        <button>Get Advance Tickets</button>
                    </a>
                </div>

                <div className='slider__Item__poster'>
                    <a href="">
                        <img src="/Images/magicmike-poster.png" alt="" className="slider__Img__Poster" />
                        <button>Get Advance Tickets</button>
                    </a>
                </div>

                <div className='slider__Item__poster'>
                    <a href="">
                        <img src="/Images/creed-poster.png" alt="" className="slider__Img__Poster" />
                        <button>Get Advance Tickets</button>
                    </a>
                </div>

                <div className='slider__Item__poster'>
                    <a href="">
                        <img src="/Images/jesus-poster.png" alt="" className="slider__Img__Poster" />
                        <button>Get Advance Tickets</button>
                    </a>
                </div>

            </Slider>
        </div> */}




    </div>
  )
}

export default Movies
