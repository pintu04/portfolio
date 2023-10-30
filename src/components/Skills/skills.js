import React from 'react'
import "./skills.css"
import cv from '../../assets/icons8-resume-24.png';
import { Link } from 'react-scroll';
import phone from '../../assets/icons8-phone-48.png';
import gmail from '../../assets/gmail.png';
import birth from '../../assets/icons8-birthdate-48.png';
import degree from '../../assets/icons8-degree-48.png';
import state from '../../assets/icons8-state-48.png';
import html from '../../assets/html.png';
import css from '../../assets/css-3.png';
import js from '../../assets/js.png';
import jq from '../../assets/pngwing.com (1).png';
import react from '../../assets/atom.png';
import bs from '../../assets/bootstrap.png';
import nd from '../../assets/pngwing.com (2).png';
import ex from '../../assets/folder_express_icon_161294.png';
import mn from '../../assets/mongodb_original_wordmark_logo_icon_146425.png';
import c from '../../assets/c.png';
import java from '../../assets/java.png';


const Skills = () => {

    return (
        <section id='skills'>
            <span className='skillTitle'>About Me</span>
            <div className='about'>
                <span className='helloSkill'>Hey, I'm <span className='skillName'>Rashmiranjan Chainy</span> and <span className='skillName'>Web developer</span></span>
                <p className='skillPara'>Fresher with having strong technical skills on Frontend and Backend Technology and also known Ansi C or Java. I am passionate for my work and i have positive thinks to complete any project.</p>
                <div className='skillInformation'>
                    <p className='skillHigh'><img src={birth} alt='birthdate' className='birth p' /><br /> <span className='sn'>Birthdate</span> <br /> <span className='details'>04 Aug 2001</span></p>
                    <p className='skillHigh'><img src={phone} alt='phone call' className='call p' /><br /><span className='sn'>Phone</span>  <br /> <span className='details'>6370155038</span></p>
                    <p className='skillHigh'><img src={gmail} alt='gmail' className='mail p' /><br /><span className='sn'>Email</span> <br /> <span className='details'>rashmiranjanchainy@gmail.com</span></p>
                    <p className='skillHigh'><img src={degree} alt='degree' className='bca p' /><br /><span className='sn'>Degree</span> <br /><span className='details'>BCA</span></p>
                    <p className='skillHigh'><img src={state} alt='state' className='odisha p' /> <br /><span className='sn'>State</span> <br /> <span className='details'>Odisha</span></p>
                <Link><button className='skillBtn'><img src={cv} alt='resume' className='skillImgbbtn' />Resume</button></Link>
                </div>
            </div>
              <span className='sk'>Technical Skill</span>
            <div className='skillIcon0'>
                <span className='TechPart'><img src={html} alt='' className='Techimg' /><br />HTML5</span>
                <span className='TechPart'><img src={css} alt='' className='Techimg' /><br />CSS3</span>
                <span className='TechPart'><img src={js} alt='' className='Techimg' /><br />JavaScript</span>
                <span className='TechPart'><img src={jq} alt='' className='Techimg' /><br />jQuery</span>
                <span className='TechPart'><img src={react} alt='' className='Techimg' /><br />React</span>
                <span className='TechPart'><img src={bs} alt='' className='Techimg' /><br />Bootstrap</span>
                <span className='TechPart'><img src={nd} alt='' className='Techimg' /><br />Nodejs</span>
                <span className='TechPart'><img src={ex} alt='' className='Techimg Techex' /><br />Express</span>
                <span className='TechPart'><img src={mn} alt='' className='Techimg' /><br />MongoDB</span>
                <span className='TechPart'><img src={c} alt='' className='Techimg' /><br />C</span>
                <span className='TechPart'><img src={java} alt='' className='Techimg' /><br />Java</span>

            </div>
        </section>
    )
}

export default Skills;
