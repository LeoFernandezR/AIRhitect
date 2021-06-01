import React from "react"
import Navbar from "../Navbar/Navbar"
import "./home.scss"

const Home = () => {
  return (
    <div className="background__image">
      <Navbar />
      <div className="home__wrapper">
        <h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </h1>
      </div>
    </div>
  )
}

export default Home
