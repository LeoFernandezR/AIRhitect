import { Icon, InlineIcon } from "@iconify/react-with-api"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Navbar from "../Navbar/Navbar"
import SectionHeader from "../SectionHeader/SectionHeader"

import "./contact.scss"

const Contact = () => {
  return (
    <section className="contact">
      <Navbar />
      <div className="contact__wrapper">
        <SectionHeader>contact</SectionHeader>
        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__info__data">
              <h1>Contact us via email, phone or come by into our office!</h1>

              <ul>
                <li>
                  <InlineIcon icon="clarity:envelope-line" className="icon" />
                  <p>info@airhitect.com</p>
                </li>
                <li>
                  <InlineIcon icon="carbon:phone-voice" className="icon" />
                  <div>
                    <p>+12 34 567 890</p>
                    <p>+09 87 654 321</p>
                  </div>
                </li>
                <li>
                  <InlineIcon icon="codicon:home" className="icon" />
                  <p>
                    1012 Budapest <br />
                    Márvany utca 16
                  </p>
                </li>
              </ul>
            </div>
            <div className="contact__info__hiring">
              <ul>
                <li>
                  <a href="#">
                    <Icon icon="ant-design:linkedin-filled" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Icon icon="ant-design:facebook-filled" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Icon icon="ant-design:instagram-outlined" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Icon icon="ant-design:google-plus-outlined" />
                  </a>
                </li>
              </ul>
              <h2>We are hiring!</h2>
              <p>
                We are looking for new talents to our team! If you think you are
                the right person for AIRhitect send us an email with your CV and
                portfolio. Don't forget to write a little about yourself!
              </p>

              <p>job@airhitect.com</p>
            </div>
          </div>
          <form className="contact__form">
            <input type="text" placeholder="Name" name="name" />
            <input type="email" placeholder="E-mail" name="email" />
            <input type="text" placeholder="Subject" name="subject" />
            <textarea
              placeholder="Message"
              name="message"
              id=""
              cols="30"
              rows="4"
            ></textarea>
            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </div>
      <div className="contact__map">
        <StaticImage
          src="../../images/location.jpg"
          alt="location"
          className="contact__map__img"
        />
      </div>
    </section>
  )
}

export default Contact
