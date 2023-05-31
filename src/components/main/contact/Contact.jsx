import Modal from "../../modal/Modal";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact">
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
        </div>
      </div>
    </section>
  );
}

export default Contact;
