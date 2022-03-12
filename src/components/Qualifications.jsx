import React from 'react'
import { useState } from 'react'

const Qualifications = () => {
    const [qualifications, setQualifications] = useState("edu");

    
  return (
    <section className="qualification section">
    <h2 className="section_title">Qualifications</h2>
    <span className="section_subtitle">My personal Journey</span>

    <div className="qualification_container container">
        <div className="qualification_tabs">
            <div className={`qualification_button button--flex ${qualifications==="edu"?"qualification_active":""}` } onClick={()=>setQualifications('edu')} >
                <i className="uil uil-graduation-cap qualification_icon "></i>
                Education
            </div>

            <div className={`qualification_button button--flex ${qualifications==="wrk"?"qualification_active":""}` } onClick={()=>setQualifications("wrk")} >
                <i className="uil uil-briefcase-alt qualification_icon"></i>
                Work
            </div>
            
        </div>

        <div className="qualification_sections">
             {/* <!-- Qualifiation Content1 --> */}
            <div className={`qualification_content ${qualifications==="edu"?"qualification_active":"dsp-hidden"}` }  >
                 {/* <!-- Qualification1 --> */}
                <div className="qualification_data">
                     <div>
                         <h3 className="qualification_title">Computer Engineer</h3>
                         <span className="qualification_subtitle">Peru -University</span>
                         <div className="qualification_calender">
                             <i className="uil uil-calender-alt"></i>
                             Undergoing
                         </div>
                     </div>

                     <div>
                         <span className="qualification_rounder"></span>
                         <span className="qualification_line"></span>
                     </div>
                </div>

                

                <div className="qualification_data">
                    <div></div>
                    <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>
                    </div>

                    <div>
                        <h3 className="qualification_title">Computer Engineer</h3>
                        <span className="qualification_subtitle">Peru -University</span>
                        <div className="qualification_calender">
                            <i className="uil uil-calender-alt"></i>
                            Undergoing
                        </div>
                    </div>

               </div>

               <div className="qualification_data">
                <div>
                    <h3 className="qualification_title">Computer Engineer</h3>
                    <span className="qualification_subtitle">Peru -University</span>
                    <div className="qualification_calender">
                        <i className="uil uil-calender-alt"></i>
                        Undergoing
                    </div>
                </div>

                <div>
                    <span className="qualification_rounder"></span>
                    <span className="qualification_line"></span>
                </div>
           </div>

           

           <div className="qualification_data">
               <div></div>
               <div>
                   <span className="qualification_rounder"></span>
                   {/* <!-- <span className="qualification_line"></span> --> */}
               </div>

               <div>
                   <h3 className="qualification_title">Computer Engineer</h3>
                   <span className="qualification_subtitle">Peru -University</span>
                   <div className="qualification_calender">
                       <i className="uil uil-calender-alt"></i>
                       Undergoing
                   </div>
               </div>

          </div>


               

               
            </div>
            <div className={`qualification_content ${qualifications==="wrk"?"qualification_active":"dsp-hidden"}` } >
                {/* <!-- Qualification1 --> */}
               <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title">Computer Engineer</h3>
                        <span className="qualification_subtitle">Peru -University</span>
                        <div className="qualification_calender">
                            <i className="uil uil-calender-alt"></i>
                            Undergoing
                        </div>
                    </div>

                    <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>
                    </div>
               </div>

               <div className="qualification_data">
                   <div></div>
                   <div>
                       <span className="qualification_rounder"></span>
                       <span className="qualification_line"></span>
                   </div>

                   <div>
                       <h3 className="qualification_title">Computer Engineer</h3>
                       <span className="qualification_subtitle">Peru -University</span>
                       <div className="qualification_calender">
                           <i className="uil uil-calender-alt"></i>
                           Undergoing
                       </div>
                   </div>

              </div>

              
           </div>
        </div>
    </div>

    
</section>

  )
}

export default Qualifications