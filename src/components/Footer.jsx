import React from 'react'

const Footer = () => {
  return (
    <><footer class="footer">

    <div class="footer_bg">
        <div class="footer_container container grid">
            <div>
                <h1 class="footer_title">Sai Prasad</h1>
                <div class="footer_subtitle">Frontend Devloper</div>
            </div>

            <ul class="footer_links">
                <li>
                    <a href="#services" class="footer_link">Services</a>
                </li>
                <li>
                    <a href="#portfolio" class="footer_link">Portfolio</a>
                </li>
                <li>
                    <a href="#contact" class="footer_link">Contact Me</a>
                </li>
            </ul>

            <div class="footer_socials">
                <a href="#home" target="_blank" class="footer_social">
                    <i class="uil uil-facebook-f"></i>
                </a>

                <a href="#home" target="_blank" class="footer_social">
                    <i class="uil uil-instagram"></i>
                </a>

                <a href="#home"  target="_blank" class="footer_social">
                    <i class="uil uil-twitter-alt"></i>
                </a>
            </div>
        </div>

        <p class="footer_copy">&#169; Sai Prasad</p>
    </div>

    
</footer>
<a href="#home" class="scroll-up" id="scroll-up">
            <i class="uil uil-arrow-up scrollup-icon"></i>
        </a></>
  )
}

export default Footer