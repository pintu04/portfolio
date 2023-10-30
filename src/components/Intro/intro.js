import React from 'react'
import './intro.css';
import bg from '../../assets/pintu.png';
import iicon from '../../assets/bag.png';
import { Link } from 'react-scroll';


const Intro = () => {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm &nbsp;
                     <span className='introName'>Rashmiranjan Chainy
                    </span><br />Full Stack Developer</span>
                <p className='introPara'>As a full stack developer fresher,
                    I bring a diverse skill set and a passion <br /> for creating innovative and user-friendly web applications.<br /> With a solid foundation in both front-end and back-end development.</p>
                <Link><button className='introBtn'><img src={iicon} alt='Hire' className='introIcon' />Hire Me</button></Link>
            </div>
            <img src={bg} alt='profile' className='bg' />
        </section>
    )
}

export default Intro