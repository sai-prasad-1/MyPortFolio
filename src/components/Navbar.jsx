import React from 'react'

const Navbar = () => {
    const navmenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-cls'),
      navLinks = document.querySelectorAll('.nav_link'),
      skilllsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header'),
      tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]'),
      modalViews = document.querySelectorAll('.serviices_modal'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalClose = document.querySelectorAll('.services_modal-close')
    

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
    <header class="header" id="header">
    <nav class="nav container">
        <a href="#" class="nav_logo">Sai Prasad</a>
        <div class="nav_menu" id="nav-menu">
            <ul class="nav_list grid">
                <li class="nav_item">
                    <a href="#home" class="nav_link active-link">
                        <i class="uil uil-estate  nav_icon"></i>Home
                    </a>
                </li>
                <li class="nav_item">
                    <a href="#about" class="nav_link">
                        <i class="uil uil-user nav_icon"></i>About
                    </a>
                </li>
                <li class="nav_item">
                    <a href="#skills" class="nav_link">
                        <i class="uil uil-file-alt  nav_icon"></i>Skills
                    </a>
                </li>
                <li class="nav_item">
                    <a href="#services" class="nav_link">
                        <i class="uil uil-briefcase-alt  nav_icon"></i>Services
                    </a>
                </li>
                <li class="nav_item">
                    <a href="#portfolio" class="nav_link">
                        <i class="uil uil-scenery  nav_icon"></i>Portfolio
                    </a>
                </li>
                <li class="nav_item">
                    <a href="#contact" class="nav_link">
                        <i class="uil uil-message  nav_icon"></i>ContactMe
                    </a>
                </li>


            </ul>
            <i class="uil uil-times nav_close " id="nav-cls"></i>
        </div>
        <div class="nav_btns">
            {/* <!-- Theame change Button --> */}
            <i class="uil uil-sun change-theme" id="theme-button"></i>

            <div class="nav_toggle" id="nav-toggle">
                <i class="uil uil-apps"></i>
                
            </div>
        </div>
    </nav>
    
</header>

  )
}

export default Navbar