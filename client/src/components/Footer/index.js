import React from 'react';
import './Footer.css';

function Footer() {

  return (
    <footer className="footer">
    <div className='footer-wrap'>

        
    </div>
    <div className="footer-container">
        <div className="item1">
        </div>

        <div className="item2">
            <span style={{ paddingRight: 5 }}>Copyright </span>
            <i className='fa fa-solid fa-copyright white'></i>
            <span style={{ paddingLeft: 5 }}>
                {new Date().getFullYear()} JShopping. All Rights
                Reserved.
            </span>
        </div>
        <a
            href="https://github.com/juliettengum/JShopping/"
            target="_blank"
            className="item3"
        >
           <i className='fa fa-solid fa-github white'></i>
        </a>
        <a
            href="#"
            className="item4"
        >
            <i className='fa fa-solid fa-facebook white'></i>
        </a>
        <a
            href="#"
            className="item5"
        >
             <i className='fa fa-solid fa-truck white'></i>
        </a>
    </div>
</footer>
  );
}

export default Footer;