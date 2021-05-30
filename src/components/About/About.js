import React from "react"

import Navbar from "../Navbar/Navbar"

import "./about.scss"

const About = () => {
  return (
    <section className="about">
      <div>
        <Navbar />
        <h1 className="about__heading">about us</h1>
      </div>
      <div className="container">
        <div className="about__motto">
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <span> Officiis, blanditiis nostrum reprehenderit </span>iusto nulla
            non totam accusamus, natus tenetur quae itaque et dolorum a ipsa
            odio in hic. Cum, neque?
          </h2>
        </div>
        <div className="about__paragraph">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit facilis,
            reiciendis? Iure, ducimus non! Debitis magni tempora numquam facilis
            non, dolor aliquid tempore labore, minima inventore cumque.
          </p>
          <p>
            Voluptatibus reprehenderit, dolore repudiandae? Veritatis iure ad
            quo eius maiores sequi excepturi expedita unde illo, ipsa ab aliquid
            enim corrupti, minima voluptate cumque? Natus iste dolorum
            similique? Officiis eligendi nemo doloremque reprehenderit
            repudiandae minus.
          </p>
          <p>
            A illum delectus fugiat voluptatibus consequuntur totam repellendus
            nihil, mollitia eligendi dolorum nesciunt corporis enim
            exercitationem nisi! Est, praesentium iste fugiat deserunt officia
            ad, ipsum quis culpa nostrum accusantium repellendus!
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
