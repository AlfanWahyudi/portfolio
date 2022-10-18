import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Modal from "../../modal/Modal";
import "./Contact.css";

function Contact() {
  const EMAIL_JS_SERVICE_ID = "service_portfolio_alfan";
  const EMAIL_JS_TEMPLATE_ID = "portfolio";
  const EMAIL_JS_PUBLIC_KEY = "9MI9ak1AMsDFcfmaB";
  const formRef = useRef();

  const [modal, setModal] = React.useState({
    message: "",
    isShow: false,
    isShowCloseBtn: false,
  });

  const sendEmail = (e) => {
    e.preventDefault();

    setModal((prevModal) => ({
      ...prevModal,
      isShow: true,
      message: "Please wait...",
    }));

    emailjs
      .sendForm(
        EMAIL_JS_SERVICE_ID,
        EMAIL_JS_TEMPLATE_ID,
        formRef.current,
        EMAIL_JS_PUBLIC_KEY
      )
      .then(() => {
        setModal((prevModal) => ({
          ...prevModal,
          message: "Successfully sent email thank you 😊",
          isShowCloseBtn: true,
        }));
        formRef.current.reset();
      })
      .catch((error) => {
        setModal((prevModal) => ({
          ...prevModal,
          message: error.text,
          isShowCloseBtn: true,
        }));
      });
  }

  const close = (isClosed) => {
    setModal((prevModal) => ({
      ...prevModal,
      isShow: !isClosed,
    }));
  }

  return (
    <section id="contact">
      {modal.isShow && (
        <Modal
          message={modal.message}
          isShowCloseBtnModal={modal.isShowCloseBtn}
          isShowModal={modal.isShow}
          onClose={close}
        />
      )}
      <div className="container">
        <h2>Contact</h2>
        <div className="contact_item">
          <div className="detail_contact">
            <div className="middle">
              <div className="contact_icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <a href="mailto:alfan.wahyudi98@gmail.com">
                alfan.wahyudi98@gmail.com
              </a>
            </div>
            <div className="middle">
              <div className="contact_icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <span>Sukabumi, Jawa Barat Indonesia</span>
            </div>
          </div>
          <form ref={formRef} onSubmit={sendEmail}>
            <input type="hidden" name="to_name" value="Alfan Wahyudi" />
            <div className="row">
              <div className="col">
                <label htmlFor="email" className="form_label">
                  Email
                </label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="col">
                <label htmlFor="message" className="form_label">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <button
                className="btn btn_form"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
