import React from 'react'
import './contact.css'
import fb from '../../assets/facebook.png'
import ld from '../../assets/linkedin.png'
import tw from '../../assets/twitter.png'
import gh from '../../assets/github.png'

const Contact = () => {
  return (
    <section id='contact'>
      <div>

      <span className='contactTitle'>Contact Me</span><br />
      <span className='contactDesc'>Please fill out the form below to discuss any work opportunity.</span>
      <form className='contactForm'>
        <input type='text' className='name' placeholder='Your Name' />
        <input type='email' className='email' placeholder='Your Email' />
        <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
        <button type='submit' value='Send' className='submitBtn'>Submit</button>

        <div className='links'>
          <img src={fb} alt='facebook' className='link' />
          <img src={ld} alt='linkedin' className='link' />
          <img src={tw} alt='twitter' className='link' />
          <img src={gh} alt='github' className='link' />
        </div>

      </form>
      </div>
    </section>
  )
}

export default Contact;
