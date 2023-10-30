import React from 'react'
import './portfolio.css'
import login from '../../assets/form.png';
import cofee from '../../assets/coffee-shop.png'
import chatApp from '../../assets/wechat.png';
import tic from '../../assets/tic-tac-toe.png';
import gym from '../../assets/fitness.png'
import port from '../../assets/resume.png'

const Portfolio = () => {
    return (
        <section id='works'>
            <span className='worksTitle'> Portfolio </span>
            <div className='worksAll'>
                <span className='iconTitle'> <img src={login} alt='Registration page' className='worksImg' /><br /><button className='workBtn'>Click Here</button></span>
                <span className='iconTitle'><img src={chatApp} alt='Chat app' className='worksImg' /><br /><button className='workBtn'>Click Here</button></span>
                <span className='iconTitle'><img src={tic} alt='Tic game' className='worksImg' /><br /><button className='workBtn'>Click Here</button></span>
                <span className='iconTitle'><img src={cofee} alt='CofeeShop' className='worksImg' /><br /><button className='workBtn'>Click Here</button></span>
                <span className='iconTitle'><img src={gym} alt='gym' className='worksImg' /><br /><button className='workBtn'>Click Here</button></span>
                <span className='iconTitle'><img src={port} alt='portfolio' className='worksImg' /><br /><button className='workBtn'>Click Here</button></span>
            </div>
        </section>
    )
}

export default Portfolio;
