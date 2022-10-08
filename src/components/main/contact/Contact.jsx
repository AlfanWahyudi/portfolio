import React from "react";
import './Contact.css';

function Contact() {
  return (
    <section id="contact">
      <div class="container">
        <h2>Contact</h2>
        <div class="contact_item">
          <div class="detail_contact">
            <div class="middle">
              <div class="contact_icon">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <a href="?">alfan.wahyudi98@gmail.com</a>
            </div>
            <div class="middle">
              <div class="contact_icon">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <span>Sukabumi, Jawa Barat Indonesia</span>
            </div>
          </div>
          <form action="" method="post">
            <div class="row">
              <div class="col">
                <label for="email" class="form_label">
                  Email
                </label>
                <input type="email" id="email" name="email" required />
              </div>
              <div class="col">
                <label for="message" class="form_label">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <button class="btn btn_form" type="submit">
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
