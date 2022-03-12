import React from "react";
import { useState } from "react";

const Skills = () => {
  const [isOpen, setIsOpen] = useState("s3");

  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My Technical Level</span>
      <div className="skills_container container grid">
        {/* <!-- <-------Skill1-------->  */}

        <div
          className={`skills_content ${
            isOpen === "s1" ? "skills_open" : "skills_close"
          }`}
        >
          <div
            className="skills_header"
            onClick={() => {if (isOpen === "s1") setIsOpen("s"); else setIsOpen("s1");}}

          >
            <i className="uil uil-brackets-curly skills_icon"></i>

            <div>
              <h1 className="skills_title">Frontend Developer</h1>
              <span className="skills_subtitle">More Than 4 years</span>
            </div>
            <i className="uil uil-angle-down skills_arrow"></i>
          </div>
          <div className="skills_list grid">
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">HTML</h3>
                <span className="skills_number">90%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage skills_html"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">CSS</h3>
                <span className="skills_numer">80%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage skills_css"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">JavaScript</h3>
                <span className="skills_numer">70%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage skills_js"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">React</h3>
                <span className="skills_numer">90%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage skills_react"></span>
              </div>
            </div>
          </div>
        </div>

        {/* // <!-- ============ Skills-2========= --> */}
        <div
          className={`skills_content ${
            isOpen === "s2" ? "skills_open" : "skills_close"
          }`}
        >
          <div
            className="skills_header"
            onClick={() => {if (isOpen === "s2") setIsOpen("s"); else setIsOpen("s2");}}
          >
            <i className="uil uil-server-network skills_icon"></i>

            <div>
              <h1 className="skills_title">Backend Developer</h1>
              <span className="skills_subtitle">More Than 4 years</span>
            </div>
            <i className="uil uil-angle-down skills_arrow"></i>
          </div>
          <div className="skills_list grid">
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">PHP</h3>
                <span className="skills_numer">90%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage skills_php"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Node.js</h3>
                <span className="skills_numer">80%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage skills_node"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Firebase</h3>
                <span className="skills_numer">70%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage skills_firebase"></span>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">Python</h3>
                  <span className="skills_numer">90%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_Python"></span>
                </div>
              </div>
            </div>
          </div>
</div>
          {/* // <!-- ===================== Skillls-3 ======== --> */}

          <div
            className={`skills_content ${
              isOpen === "s3" ? "skills_open" : "skills_close"
            }`}
          >
            <div
              className="skills_header"
              onClick={() => {if (isOpen === "s3") setIsOpen("s"); else setIsOpen("s3");}}
            >
              <i className="uil uil-swatchbook skills_icon"></i>

              <div>
                <h1 className="skills_title">Designer </h1>
                <span className="skills_subtitle">More Than 4 years</span>
              </div>
              <i className="uil uil-angle-down skills_arrow"></i>
            </div>
            <div className="skills_list grid">
              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">Figma</h3>
                  <span className="skills_numer">90%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_html"></span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">Photoshop</h3>
                  <span className="skills_numer">80%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_css"></span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">illustrator</h3>
                  <span className="skills_numer">70%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_js"></span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">Sketch</h3>
                  <span className="skills_numer">90%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_react"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
     
    </section>
  );
};

export default Skills;
