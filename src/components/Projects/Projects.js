import { Icon } from "@iconify/react-with-api"
import React from "react"

import Navbar from "../Navbar/Navbar"
import SectionHeader from "../SectionHeader/SectionHeader"

import "./projects.scss"

const Projects = () => {
  return (
    <section className="projects">
      <Navbar />
      <div className="project project__1">
        <SectionHeader>projects</SectionHeader>
      </div>
      <div className="project project__2">
        <SectionHeader>projects</SectionHeader>
        <div className="projects__arrows">
          <button>
            <Icon icon="topcoat:back-light" />
          </button>
          <button>
            <Icon icon="topcoat:next-light" />
          </button>
        </div>
        <div className="projects__legend">
          <h2>Project Name</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            itaque illo dolorem sapiente.
          </p>
        </div>
      </div>
      <div className="project project__3"></div>
    </section>
  )
}

export default Projects
