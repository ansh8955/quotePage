import React from 'react';
import './Footer.css';
import footer from '../Assests/footer/footer.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='footer'>

    <img src={footer} alt='footerimg'/>

      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/> Incidunt consequuntur amet culpa cum itaque neque.</p>
<div className='links'>

<span>About</span>
      <span>Careers</span>
      <span>History</span>
      <span>Services</span>
      <span>Projects</span>
      <span>Blogs</span>
</div>
     <div className='socialsites'>

        <span> <a href="https://www.facebook.com">
        <FontAwesomeIcon icon={faFacebook} />
      </a></span>
        <span><a href="https://www.instagram.com">
        <FontAwesomeIcon icon={faInstagram} />
      </a></span>
        <span> <a href="https://www.twitter.com">
        <FontAwesomeIcon icon={faTwitter} />
      </a></span>
        <span><a href="https://www.github.com">
        <FontAwesomeIcon icon={faGithub} />
      </a></span>
        <span><a href="https://www.dribbble.com">
        <FontAwesomeIcon icon={faDribbble} />
      </a></span>
     </div>
    </div>
  )
}

export default Footer;
