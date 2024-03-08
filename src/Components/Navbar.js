import React from 'react';
import './Navbar.css';
import Button from './Button';
import logo from '../../src/Assests/logo/geekfood-brand-logo.svg';



const Navbar =()=>{


    return (

        <>

        <nav className='navbar'>

        <div className='logo'>
<img src={logo} alt='logo'/>

<span className='geeksname'>GeekFoods</span>
        </div>
        <div className='nav-links'>
           <div><span className='navlink'>Home</span></div>
           <div><span className='navlink'>Quote</span></div>
           <div><span className='navlink'>Restaurants</span></div>
           <div><span className='navlink'>Foods</span></div>
           <div><span className='navlink'>Contacts</span></div>

        </div>
        <div><Button borderRadius="8px" backgroundColor="#1C4ED8" fontColor="#FFFFF" padding="10px 1rem"
       
        >Get Started</Button>
        </div>


        </nav>


        </>



    )
}

export default  Navbar;