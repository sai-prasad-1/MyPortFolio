import React from 'react'

const Contact = () => {
  return (
    <section class="contact section" id="contact">

                <h2 class="section_title">Contact Me</h2>
                <span class="section_subtitle">Get in Touch</span>


                <div class="contact_container container  grid">
                    <div>
                    <div class="contact_information">

                        <i class="uil uil-phone contact_icon"></i>
                        <div>
                            <h3 class="contact_title">Call Me</h3>
                            <span class="contact_subtitle">999-7777-888</span>
                        </div>
                    </div>

                    <div class="contact_information">

                        <i class="uil uil-envelope contact_icon"></i>
                        <div>
                            <h3 class="contact_title">Mail Me</h3>
                            <span class="contact_subtitle">sai.prasad.1603@gmail.com</span>
                        </div>
                    </div>

                    <div class="contact_information">

                        <i class="uil uil-map-marker contact_icon"></i>
                        <div>
                            <h3 class="contact_title">Location</h3>
                            <span class="contact_subtitle">Kerala -India</span>
                        </div>
                    </div>
                    </div>
                    <form action="https://formspree.io/f/meqvyegb"
                    method="POST" class="contact_form grid">
                        <div class="contact_inputs grid">
                            <div class="contact_content">
                                <label for="" class="contact_label">Name</label>
                                <input type="text" name="Name" class="contact_input" required=''/>
                            </div>

                            <div class="contact_content">
                                <label  class="contact_label"  >Email</label>
                                <input type="email" class="contact_input" name="Email" required=''/>
                            </div>
                        </div>
                        <div class="contact_content">
                            <label for="" class="contact_label" >Project</label>
                            <input type="text" name="Project" class="contact_input" required=''/>
                        </div>
                        <div class="contact_content">
                            <label for="" class="contact_label" >Message</label>
                            <textarea   cols="0" rows="7" class="contact_input" name="Message" required=''></textarea>
                        </div>

                        <div>
                            <button type="submit"  class="button button--flex formButton">
                                Send Message
                                <i class="uil uil-message button_icon"></i>
                            </button>
                        </div>
                        
                    </form>

                </div>




            </section>
  )
}

export default Contact