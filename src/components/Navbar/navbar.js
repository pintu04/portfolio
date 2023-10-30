import React from 'react'
import "./navbar.css"
import logo from '../../assets/briefcase.png'
import linkContact from '../../assets/phone.png'
import {Link} from 'react-scroll';

 const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt='Logo' className='logo' />
      <div className='desctopMenu'>
        <Link className='desctopMenuLink'>Home</Link>
        <Link className='desctopMenuLink'>About</Link>
        <Link className='desctopMenuLink'>Portfolio</Link>
        

      </div>
      <button className='desctopMenuBtn'>
       <img src={linkContact} alt='' className='desctopMenuImg' />Contact me</button>
    </nav>
  )
}
export default Navbar;