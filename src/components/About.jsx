import React from 'react'

const About = () => {
  return (
    <section className="about section" id="about">
    <h2 className="section_title">About Me</h2>
    <span className="section_subtitle">My Introduction</span>

<div className="about_container container grid">
        {/* <img src="assets/img/about.jpg" alt="" className="about_img"/> */}
    

    <div className="about_data">
        <p className="about_description">
            Web Developer,with extensive knowladge and more than one year of experience working in web technologies,Machine Learning
        </p>
        <div className="abt-c">

            <div className="about_info">
                <span className="about_info-title">08+</span>
                <span className="about_info-name">Years<br/>Experience</span>
            </div>
            <div className="about_info">
                <span className="about_info-title">20+</span>
                <span className="about_info-name">Completed<br/>project</span>
            </div>
            <div className="about_info">
                <span className="about_info-title">5+</span>
                <span className="about_info-name">Companies<br/>Worked</span>
            </div>
        </div>
    </div>

</div>
    <div className="about_buttons">
            <a download="" href='#home'  className="button button--flex">
                Download Cv<i className="uil uil-download-alt button_icon"></i>
            </a>
    </div>



</section>
  )
}

export default About