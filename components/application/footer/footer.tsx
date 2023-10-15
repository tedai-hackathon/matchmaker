import React, { useState } from 'react';
import Logo from '../navbar/logo';

function Footer() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="collapse">
          <input type="checkbox"/> 
          <div className="collapse-title text-xs md:text-sm flex flex-row items-baseline gap-2"> 
            <Logo className="w-8 md:w-16 z-auto"/>
            <p>Companions Ltd. (c)2023</p>
          </div>       
          <div className="collapse-content overflow-y-auto"> 
              <div className='flex flex-row gap-1'>
                <span className="footer-title">Services</span> 
                <a className="link link-hover">Branding</a> 
                <a className="link link-hover">Design</a> 
                <a className="link link-hover">Marketing</a> 
                <a className="link link-hover">Advertisement</a>
              </div> 
              <div className='flex flex-row gap-1'>
                <span className="footer-title">Company</span> 
                <a className="link link-hover">About us</a> 
                <a className="link link-hover">Contact</a> 
                <a className="link link-hover">Jobs</a> 
                <a className="link link-hover">Press kit</a>
              </div> 
              <div className='flex flex-row gap-1'>
                <span className="footer-title">Legal</span> 
                <a className="link link-hover">Terms of use</a> 
                <a className="link link-hover">Privacy policy</a> 
                <a className="link link-hover">Cookie policy</a>
              </div>
          </div>
        </div>
    );
}

export default Footer;