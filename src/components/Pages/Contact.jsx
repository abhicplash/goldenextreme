import React from "react";
import Layout from "../Layout/Layout";
import "./contact.css";
import { IoLocationSharp } from "react-icons/io5";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <Layout>
      <div className="contact-container">
        <div className="Page-Top">
          <h2>Contact Us</h2>
        </div>
        <div className="contact-details">
          <div className="contact-left">
            <div className="contact-address">
              <IoLocationSharp className="contactIcon" />
              <div>
                <h4>Our Office Address</h4>
                <h5 className="contactInfo">
                  {" "}
                  Robert Robertson,
                  <br /> 1234 NW Bobcat Lane, <br /> St. Robert, <br />
                  65584-5678
                </h5>
              </div>
            </div>
            <div className="contact-address">
              <FaEnvelopeOpenText className="contactIcon" />
              <div>
                <h4>General Enquiries</h4>
                <h5 className="contactInfo"> goldenextreme@gmail.com</h5>
              </div>
            </div>
            <div className="contact-address">
              <FaPhoneAlt className="contactIcon" />
              <div>
                <h4>Call us</h4>
                <h5 className="contactInfo">+971-0000000</h5>
              </div>
            </div>
            <div className="contact-address">
              <FaRegClock className="contactIcon" />
              <div>
                <h4>Our Timing</h4>
                <h5 className="contactInfo">Mon-Fri:10:00 AM - 7:00 PM</h5>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form action="">
              <input
                type="text"
                className="contactname"
                placeholder="Your Name"
              />
              <input
                type="email"
                className="contactmail"
                placeholder="Your Email"
              />
              <input
                type="text"
                className="contactPhone"
                placeholder="Your Contact Number"
              />
              <textarea
                name=""
                id=""
                className="contactmsg"
                placeholder="Your Message"
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div className="contactMap">
          <iframe
            title="contactmap"
            className="contactMapiframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7220.255716929239!2d55.2623341977596!3d25.198910314797462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434039c9dd49%3A0xb62266b91ad4aad9!2sBurj%20Vista%20Tower%201%20-%20Downtown%20Dubai!5e0!3m2!1sen!2sin!4v1725640619265!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
