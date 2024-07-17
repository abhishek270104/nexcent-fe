import Image from 'next/image';
import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='upper py-10'>
        <h2 className='mx-auto text-center'>Pellentesque suscipit fringilla libero eu.</h2>
        <button className='flex gap-1 mx-auto'>Give a demo <Image src="/images/white-right-arrow.svg" alt="" /></button>
      </div>
      <div className="wrapper py-10">
        <div className='lower flex justify-between mx-auto'>
          <div>
            <div className='logo'>
              <Image src='/images/logo-white.svg' alt="logo" />
              <span className='logoText'>Nexcent</span>
            </div>
            <div className='my-10'>
              <p>Copyright &#169; Nexcent ltd.</p>
              <p>All rights reserved</p>
            </div>
            <div className='flex gap-2'>
              <div className='roundedDiv'><Image src="/images/instagram.svg" alt="instagram" /></div>
              <div className='roundedDiv'><Image src="/images/basketball.svg" alt="basketball" /></div>
              <div className='roundedDiv'><Image src="/images/twitter.svg" alt="twitter" /></div>
              <div className='roundedDiv'><Image src="/images/youtube.svg" alt="youtube" /></div>
            </div>
          </div>
          <div className='flex gap-5'>
            <div className='px-10'>
              <h3>Company</h3>
              <ul>
                <li>About us</li>
                <li>Blog</li>
                <li>Contact us</li>
                <li>Pricing</li>
                <li>Testimonials</li>
              </ul>
            </div>
            <div className='px-10'>
              <h3>Support</h3>
              <ul>
                <li>Help center</li>
                <li>Terms of service</li>
                <li>Legal</li>
                <li>Privacy policy</li>
                <li>Status</li>
              </ul>
            </div>
            <div className='px-10'>
              <h3>Stay up to date</h3>
              <div className='inputBox'><input placeholder='Your email address' /><span><Image src="/images/send.svg" alt=''/></span></div>
            </div>
          </div>
        </div></div>


    </footer>
  )
}

export default Footer;