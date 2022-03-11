import React from 'react'

const HeroSection = () => {
  return (
    <section class="home section" id="home">
            <div class="home_container container grid">
                <div class="home_content grid">
                    <div class="home_social">
                            <a href=""  target = "_blank"class="home_social-icon">
                                <i class="uil uil-linkedin-alt"></i>

                            </a>
                            <a href=""  target = "_blank" class="home_social-icon">
                                <i class="uil uil-dribbble"></i>
                            </a>
                            <a href="" class="home_social-icon" target = "_blank">
                                <i class="uil uil-github-alt"></i>     
                                
                            </a>
                    </div>

                    <div class="blob-container">

                            
                         <div class="home_blob">
                            <svg viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <mask class="home_blob" id="mask0" mask-type="alpha">
                                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                                </mask>
                                <g mask="url(#mask0)">
                                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                                    {/* <image class="home_blob-img" x='12' y='18' xlinkHref="assets/img/perfil.png"/> */}
                                </g>
                            </svg>
                         </div>
                    </div>
                        
                   
                
                        
                    
                    
                    <div class="home_data">
                            <h1 class="home_title">
                                Hi,  I'am Sai Prasad
                            </h1>
                            <h3 class="home_subtitle">
                                Frontend Devloper
                            </h3>
                            <p class="home_description">
                                High level experience in web design and development Knowladge,producing high quality work
                            </p>
                            <a href="#contact"class="button button--flex">
                                Contact Me <i class="uil uil-message button_icon"></i>
                            </a>
                    </div>

                   

                    <div class="home_scroll">
                        <a href="#about" class="home_scroll-button button--flex">
                            <i class="uil uil-mouse-alt home_scroll-mouse"></i>
                            <span class="home_scroll-name"> Scroll Down</span>
                            <i class="uil uil-arrow-down home_scroll-arrow "></i>
                        </a>

                    </div>
                </div>
            </div>
                
        </section>

  )
}

export default HeroSection