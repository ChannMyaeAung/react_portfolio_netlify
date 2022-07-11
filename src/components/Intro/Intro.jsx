import React, { useContext } from 'react'
import '../Intro/Intro.css'
/* Left Side */
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
/* Right Side */
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import profile from '../../img/profile_pic.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import { motion } from 'framer-motion'

const Intro = () => {

    const transition = {duration: 2, type: 'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='intro'>
        <div className="i-left">
            <div className="i-name">
                <span
                    style={{color: darkMode ? 'white' : ''}}
                >Hi I Am</span>
                <span>Chan</span>
                <span> I am currently learning to be a full-stack developer. I'm looking to collaborate on any kind of internship which will get me necessary experience to jump into the professional IT industry.</span>
            </div>

            <button className="button i-button">Hire me</button>

            <div className="i-icons">

                <a href="https://github.com/ChannMyaeAung" target='__blank'>
                    <img src={Github} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/chan-myae-aung-4434b9157/" target='__blank'>
                    <img src={LinkedIn} alt="" />
                </a>
                <a href="https://www.instagram.com/vincentchen25/" target='__blank'>
                    <img src={Instagram} alt="" />
                </a>
            </div>
        </div>

        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={profile} alt="" className='i-profile'/>
            <motion.img 
                initial={{left: '-36%'}}
                whileInView= {{left: '-10%'}}
                transition={transition}
            src={glassesimoji} alt="" />

            <motion.div 
                initial={{top: '-4%', left: '74%'}}
                whileInView={{left: '68%'}}
                transition={transition}
                className= 'floating-div'
            >
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
            </motion.div>

            <motion.div 
                initial={{left: '9rem', top: '18rem'}}
                whileInView={{left: '0rem'}}
                transition={transition}
                className= 'floating-div'
            style={{top: '18rem', left: '-0.5rem'}}>
                <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
            </motion.div>

            <div 
                className="blur blur-pink"
                style={{
                    background: 'rgb(238 210 255)'
                }}
            >
            </div>

            <div 
                className="blur blur-skyblue"
                style={{
                    background: '#C1F5FF',
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem'
                }}
            >

            </div>
        </div>
    </div>
  )
}

export default Intro