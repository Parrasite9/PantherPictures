import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import '../CSS/Hero.css'


function Hero(props) {

  let settings = {
        dots: true,
        Infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
  }

  return (
    <div className='hero'>
      <Slider {...settings} >

          <div className='slide__Item'>
              <a href="">
                  <img src="/Images/antman-slider.png" alt="" className="slider__Img" />
                  <button>Get Tickets</button>
                  <button>Learn More</button>
              </a>
          </div>

          <div className='slide__Item'>
              <a href="">
                  <img src="/Images/magicmike-slider.png" alt="" className="slider__Img" />
                  <button>Get Tickets</button>
                  <button>Learn More</button>
              </a>
          </div>

          <div className='slide__Item'>
              <a href="">
                  <img src="/Images/creed-slider.png" alt="" className="slider__Img" />
                  <button>Get Tickets</button>
                  <button>Learn More</button>
              </a>
          </div>

          <div className='slide__Item'>
              <a href="">
                  <img src="/Images/jesus-slider.png" alt="" className="slider__Img" />
                  <button>Get Tickets</button>
                  <button className='hide__button'>Learn More</button>
              </a>
          </div>

      </Slider>
      
    </div>
  )
}

export default Hero
