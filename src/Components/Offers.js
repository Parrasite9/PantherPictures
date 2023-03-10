import React from 'react'
import '../CSS/Offers.css'

import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Instagram } from '@mui/icons-material';

function Offers() {
  return (
    <div className='offers'>
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
            <hr className='offersLine' />
            <div className="followUs">
                <FacebookIcon />
                <InstagramIcon />
                <YouTubeIcon />
            </div>


        </div>
    </div>
  )
}

export default Offers
