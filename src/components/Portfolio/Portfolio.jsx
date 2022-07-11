import React, { useContext } from 'react'
import {themeContext} from '../../Context'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import PortfolioTwo from '../../img/portfoliosecond.png'
import PortfolioOne from '../../img/portfoliofirst.png'
import PortfolioThree from '../../img/portfoliothird.png'
import PortfolioFour from '../../img/portfoliofourth.png'
import 'swiper/css'

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className='portfolio' id='Portfolio'>
        {/* heading */}
        <span
            style={{color: darkMode ? 'white' : ''}}
        >Recent Projects</span>
        <span>Portfolios</span>

        {/* slider */}

        <Swiper
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className='portfolio-slider'
        >
            
            <SwiperSlide>
                <a href=" https://channmyaeaung-worldstudio.netlify.app/" target='__blank'>
                    <img src={PortfolioOne} alt="" />
                </a>
                
            </SwiperSlide>
           
            
            <SwiperSlide>
                <a href="https://chanmyaeaung.netlify.app/#" target='__blank'>
                    <img src={PortfolioTwo} alt="" />
                </a>
            </SwiperSlide>

            <SwiperSlide>
                <a href="https://channmyaeaung.github.io/Moden_react_website/" target='__blank'>
                    <img src={PortfolioThree} alt="" />
                </a>
                
            </SwiperSlide>

            <SwiperSlide>
                <a href="https://channmyaeaung.github.io/React_Blog_Website_Design/" target='__blank'>
                    <img src={PortfolioFour} alt="" />
                </a> 
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio