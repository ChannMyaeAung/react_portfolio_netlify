import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  return (
    <div className='footer'>
        <img src={Wave} alt="" style={{width: '100%'}}/>

        <div className="f-content">
            <span>chanaung48944@gmail.com</span>
            <div className="f-icons">
                <a href="https://www.instagram.com/vincentchen25/" target='__blank'>
                    <Insta color='white' size='3rem'/>
                </a>

                <a href="https://www.facebook.com/Chanmyaeaung251/" target='__blank'>
                    <Facebook color='white' size='3rem'/>
                </a>

                <a href="https://github.com/ChannMyaeAung" target='__blank'>
                    <Github color='white' size='3rem'/>
                </a>
                
                
            </div>
        </div>
    </div>
  )
}

export default Footer