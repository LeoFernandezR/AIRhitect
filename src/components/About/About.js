import React from "react"

import Navbar from "../Navbar/Navbar"
import SectionHeader from "../SectionHeader/SectionHeader"

import "./about.scss"

const About = () => {
  return (
    <section className="about">
      <Navbar />
      <SectionHeader>about</SectionHeader>
      <div className="container">
        <div className="about__motto">
          <hr />
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <span> Officiis, blanditiis nostrum reprehenderit </span>iusto nulla
            non totam accusamus, natus tenetur quae itaque et dolorum a ipsa
            odio in hic. Cum, neque?
          </h2>
          <hr />
        </div>
        <div className="about__paragraph">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit
            saepe quisquam recusandae veniam quidem. Amet vel eum ullam sapiente
            eligendi, aspernatur laudantium incidunt necessitatibus,
            consequuntur corrupti, totam illo quos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit
            saepe quisquam recusandae veniam quidem. Amet vel eum ullam sapiente
            eligendi, aspernatur laudantium incidunt necessitatibus,
            consequuntur corrupti, totam illo quos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit
            saepe quisquam recusandae veniam quidem. Amet vel eum ullam sapiente
            eligendi, aspernatur laudantium incidunt necessitatibus,
            consequuntur corrupti, totam illo quos.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
