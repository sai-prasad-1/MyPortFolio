import React from 'react'

const Navbar = () => {
    const navmenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-cls'),
      navLinks = document.querySelectorAll('.nav_link')
   
    
      
      navToggle.addEventListener('click',()=>{
        navmenu.classList.add('show-menu');
        navToggle.style.opacity = 0
    
    })
    
    navClose.addEventListener('click',()=>{
        navmenu.classList.remove('show-menu');
        navToggle.style.opacity = 1
    })
    
    /*==================== REMOVE MENU MOBILE ====================*/
    let linkAction=()=>{
        navmenu.classList.remove('show-menu')
        navToggle.style.opacity = 1
    }
    navLinks.forEach(n=>n.addEventListener('click',linkAction))
    

  return (
    <header className="header" id="header">
    <nav className="nav container">
        <a href="#" className="nav_logo">Sai Prasad</a>
        <div className="nav_menu" id="nav-menu">
            <ul className="nav_list grid">
                <li className="nav_item">
                    <a href="#home" className="nav_link active-link">
                        <i className="uil uil-estate  nav_icon"></i>Home
                    </a>
                </li>
                <li className="nav_item">
                    <a href="#about" className="nav_link">
                        <i className="uil uil-user nav_icon"></i>About
                    </a>
                </li>
                <li className="nav_item">
                    <a href="#skills" className="nav_link">
                        <i className="uil uil-file-alt  nav_icon"></i>Skills
                    </a>
                </li>
                <li className="nav_item">
                    <a href="#services" className="nav_link">
                        <i className="uil uil-briefcase-alt  nav_icon"></i>Services
                    </a>
                </li>
                <li className="nav_item">
                    <a href="#portfolio" className="nav_link">
                        <i className="uil uil-scenery  nav_icon"></i>Portfolio
                    </a>
                </li>
                <li className="nav_item">
                    <a href="#contact" className="nav_link">
                        <i className="uil uil-message  nav_icon"></i>ContactMe
                    </a>
                </li>


            </ul>
            <i className="uil uil-times nav_close " id="nav-cls"></i>
        </div>
        <div className="nav_btns">
            {/* <!-- Theame change Button --> */}
            <i className="uil uil-sun change-theme" id="theme-button"></i>

            <div className="nav_toggle" id="nav-toggle">
                <i className="uil uil-apps"></i>
                
            </div>
        </div>
    </nav>
    
</header>

  )
}

export default Navbar