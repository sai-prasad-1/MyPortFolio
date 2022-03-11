import React from 'react'

const About = () => {
  return (
    <section class="about section" id="about">
    <h2 class="section_title">About Me</h2>
    <span class="section_subtitle">My Introduction</span>

<div class="about_container container grid">
        {/* <img src="assets/img/about.jpg" alt="" class="about_img"/> */}
    

    <div class="about_data">
        <p class="about_description">
            Web Developer,with extensive knowladge and more than one year of experience working in web technologies,Machine Learning
        </p>
        <div class="abt-c">

            <div class="about_info">
                <span class="about_info-title">08+</span>
                <span class="about_info-name">Years<br/>Experience</span>
            </div>
            <div class="about_info">
                <span class="about_info-title">20+</span>
                <span class="about_info-name">Completed<br/>project</span>
            </div>
            <div class="about_info">
                <span class="about_info-title">5+</span>
                <span class="about_info-name">Companies<br/>Worked</span>
            </div>
        </div>
    </div>

</div>
    <div class="about_buttons">
            <a download=""  class="button button--flex">
                Download Cv<i class="uil uil-download-alt button_icon"></i>
            </a>
    </div>



</section>
  )
}

export default About