import React, { useContext } from 'react'
import '../Services/Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './Resume.docx'
import { themeContext } from '../../Context'
import { motion } from 'framer-motion'

const Services = () => {

    const transition = {duration: 1, type:'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className='services' id='Services'>
        {/* left side */}

        <div className="awesome">
            <span
                style= {{color: darkMode ? 'white' : ''}}
            >My Awesome</span>
            <span>Services</span>
            <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                <br/>
                ipsum is simpley dummy text of printing
            </span>
            <a href={Resume} download>
                <button className="button s-button">Download CV</button>
            </a>
            

            <div 
                className="blur s-blur1"
                style={{ background: '#ABF1FF94'}}
            >

            </div>
        </div>

        {/* right side */}

        <div className="cards">
            <motion.div 
                whileInView={{left: '19rem'}}
                initial={{left: '20%'}}
                transition={transition}
            style={{left: '14rem'}}>
                {/* first card */}
                <Card
                    emoji = {HeartEmoji}
                    heading = {'Design'}
                    detail = {'Figma, Sketch, Photoshop, Adobe, Adobe XD'}
                
                />
            </motion.div>

            <motion.div 
                initial={{left: '15%'}}
                whileInView={{left: '0.3rem'}}
                transition={{duration: 3, type: 'spring'}}
                style={{ top: '12rem' , left: '-4rem'}}
            >
                <Card
                    emoji = {Glasses}
                    heading = {'Developer'}
                    detail = {'HTML, CSS, JavaScript, React, Nextjs, Python, Data Structures and Algorithm'}
                
                />
            </motion.div>

            <motion.div 
                initial={{left: '20%'}}
                whileInView={{left: "18rem"}}
                transition={{duration: 3, type: 'spring'}}
                style={{ top: '19rem' , left: '12rem'}}
            >
                <Card
                    emoji = {Humble}
                    heading = {'UI/UX'}
                    detail = {'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                
                />
            </motion.div>

            <div 
                className="blur s-blur2"
                style={{ background: 'var(--purple)'}}
            >

            </div>
        </div>
    </div>
  )
}

export default Services