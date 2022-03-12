import React from "react";

const Services = () => {
  const modalViews = document.querySelectorAll(".serviices_modal"),
    modalBtns = document.querySelectorAll(".services_button"),
    modalClose = document.querySelectorAll(".services_modal-close");

  let modal = function (modalclick) {
    modalViews[modalclick].classList.add("active-modal");
  };

  modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener("click", () => {
      modal(i);
    });
  });

  modalClose.forEach((modalclose) => {
    modalclose.addEventListener("click", () => {
      modalViews.forEach((modalview) => {
        modalview.classList.remove("active-modal");
      });
    });
  });

  return (
    <section className="services section" id="services">
      <h2 className="section_title">Services</h2>
      <span className="section_subtitle">What I Offer</span>

      <div className="services_container container grid">
        {/* <!-- ======================= Services-1==================== --> */}
        <div className="services_content">
          <div>
            <i className="uil uil-web-grid services_icon"></i>
            <h3 className="services_title">
              Ui/Ux <br /> Designer
            </h3>
          </div>
          <span className="button button--flex button--small button--link  services_button">
            View More
            <i className="uil uil-arrow-right button_icon"></i>
          </span>

          <div className="serviices_modal ">
            <div className="services_modal-content">
              <h4 className="services_modal-title">
                Ui/Ux <br /> Designer
              </h4>
              <i className="uil uil-times services_modal-close"></i>
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p>I Develope User Interfaces </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p>Web page Development </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p> i ceate uxelement Interaction </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p>I position your company brand </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <!-- ======================= Services-2==================== --> */}
        <div className="services_content">
          <div>
            <i className="uil uil-arrow services_icon"></i>
            <h3 className="services_title">
              Froentend <br /> Developer
            </h3>
          </div>
          <span className="button button--flex button--small button--link  services_button">
            View More
            <i className="uil uil-arrow-right button_icon"></i>
          </span>

          <div className="serviices_modal">
            <div className="services_modal-content">
              <h4 className="services_modal-title">
                Frontend <br /> Developer
              </h4>
              <i className="uil uil-times services_modal-close"></i>
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p>I Develope User Interfaces </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p>Web page Development </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p> i ceate uxelement Interaction </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p>I position your company brand </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <!-- ======================= Services-3==================== --> */}
        <div className="services_content">
          <div>
            <i className="uil uil-pen services_icon"></i>
            <h3 className="services_title">
              Branding <br /> Designer
            </h3>
          </div>
          <span className="button button--flex button--small button--link  services_button">
            View More
            <i className="uil uil-arrow-right button_icon"></i>
          </span>

          <div className="serviices_modal">
            <div className="services_modal-content">
              <h4 className="services_modal-title">
                Ui/Ux <br /> Designer
              </h4>
              <i className="uil uil-times services_modal-close"></i>
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p>I Develope User Interfaces </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p>Web page Development </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p> i ceate uxelement Interaction </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p>I position your company brand </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
