import React, { useRef } from "react";
import logo from "./../../assests/images/logo.png";
import "./hero-section.css";

const navLinks = [
  {
    display: "الرئيسية",
    url: "#",
  },

  {
    display: "اشتراك",
    url: "#",
  },
  {
    display: "دخول",
    url: "#",
  },
  {
    display: " أقسام الدار",
    url: "#",
  },
  {
    display: "من نحن",
    url: "#",
  },
];
const HeroSection = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <div className="container1">
      <header className="header">
        <div className="logo">
          <a href="#">
            <img id="image-logo" src={logo} alt="Logo Image" />
          </a>
        </div>

        <div className="nav d-flex align-items-center nav gap-5">
          <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
            <ul className="nav__list">
              {navLinks.map((item, index) => (
                <li key={index} className="nav__item">
                  <a href={item.url}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mobile__menu">
          <span>
            <i class="ri-menu-line" onClick={menuToggle}></i>
          </span>
        </div>
      </header>
      <div className="content">
        <h1>اتعلم</h1>
        <a>
          <button class="btn hero__btn">اتعلم</button>
        </a>
      </div>
      {/* Home Section Starts */}

      {/* <div className="home">
        
        <div className="content">
          <h1>اتعلم </h1>
          <a>
            <button class="btn hero__btn">اتعلم</button>
          </a>
        </div> */}

      {/* <div className="container2">
 <svg className="svg1" viewBox='0 0 105 105'>
  <path d='M 25,60 
           a 20,20 1 0,0 0,40 
           h 50 
           a 20,20 1 0,0 0,-40 
           a 10,10 1 0,0 -15,-10 
           a 15,15 1 0,0 -35,10  
           z' />
</svg>
<svg className="svg2" viewBox='0 0 105 105'>
  <path d='M 25,60 
           a 20,20 1 0,0 0,40 
           h 50 
           a 20,20 1 0,0 0,-40 
           a 10,10 1 0,0 -15,-10 
           a 15,15 1 0,0 -35,10  
           z' />
</svg>
<svg className="svg3" viewBox='0 0 105 105'>
  <path d='M 25,60 
           a 20,20 1 0,0 0,40 
           h 50 
           a 20,20 1 0,0 0,-40 
           a 10,10 1 0,0 -15,-10 
           a 15,15 1 0,0 -35,10  
           z' />
</svg>
<svg className="svg4" viewBox='0 0 105 105'>
  <path d='M 25,60 
           a 20,20 1 0,0 0,40 
           h 50 
           a 20,20 1 0,0 0,-40 
           a 10,10 1 0,0 -15,-10 
           a 15,15 1 0,0 -35,10  
           z' />
</svg>
<svg className="svg5" viewBox='0 0 105 105'>
  <path d='M 25,60 
           a 20,20 1 0,0 0,40 
           h 50 
           a 20,20 1 0,0 0,-40 
           a 10,10 1 0,0 -15,-10 
           a 15,15 1 0,0 -35,10  
           z' />
</svg>
<svg className="svg6" viewBox='0 0 105 105'>
  <path d='M 25,60 
           a 20,20 1 0,0 0,40 
           h 50 
           a 20,20 1 0,0 0,-40 
           a 10,10 1 0,0 -15,-10 
           a 15,15 1 0,0 -35,10  
           z' />
</svg>
<svg className="svg7" viewBox='0 0 105 105'>
  <path d='M 25,60 
           a 20,20 1 0,0 0,40 
           h 50 
           a 20,20 1 0,0 0,-40 
           a 10,10 1 0,0 -15,-10 
           a 15,15 1 0,0 -35,10  
           z' />
</svg>
<svg className="svg8" viewBox='0 0 105 105'>
  <path d='M 25,60 
           a 20,20 1 0,0 0,40 
           h 50 
           a 20,20 1 0,0 0,-40 
           a 10,10 1 0,0 -15,-10 
           a 15,15 1 0,0 -35,10  
           z' />
</svg>

 </div>
        */}

      <div class="hero__img"></div>
      {/* </div>  */}
    </div>
  );
};

export default HeroSection;
