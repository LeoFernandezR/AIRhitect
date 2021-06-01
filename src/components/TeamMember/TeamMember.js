import React from "react"

import "./teammember.scss"

const TeamMember = ({ img, name, position, description }) => {
  return (
    <div className="member">
      <div className="member__avatar">
        <img src={img} alt={name} />
      </div>
      <h2>{name}</h2>
      <h3>{position}</h3>
      <p>{description}</p>
    </div>
  )
}

export default TeamMember
