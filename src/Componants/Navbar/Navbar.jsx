import React, { useEffect, useState, } from 'react'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import './Navbar.css'
import { Link } from 'react-scroll'


const navbar = () => {

  const [sticky, setSticky] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY>50 ? setSticky(true) : setSticky(false);
    })
  },[])

  const [mobilemenu , setMobilemenu] = useState(false)
  const ToggleMenu = () =>{
    mobilemenu ? setMobilemenu(false) : setMobilemenu(true);
  }

  return (
    <nav className= {`container n ${sticky ? 'dark-nav' : ''}`}>
        <img className='logo' src={logo} alt="" />

         <div className= {`ul-tag  ${mobilemenu ? '' : 'h mobile-menu'}`}>
            <li><Link to='hero' smooth={true} offset={0} duration={500} >Home</Link></li>
            <li><Link to='programs' smooth={true} offset={-240} duration={500} >Program</Link></li>
            <li><Link to='about' smooth={true} offset={-100} duration={500} >About Us</Link></li>
            <li><Link to='campus' smooth={true} offset={-240} duration={500} >Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-200} duration={500} >Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-240} duration={500} className='btn'>Contact us</Link></li>
         </div>
         <img src={menu_icon} alt="" className='menu_icon' onClick={ToggleMenu}/>
    </nav>
  )
}

export default navbar