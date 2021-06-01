import React from "react"

import Navbar from "../Navbar/Navbar"
import SectionHeader from "../SectionHeader/SectionHeader"
import TeamMember from "../TeamMember/TeamMember"

import Avatar from "../../images/gatsby-icon.png"

import "./team.scss"

const Team = () => {
  return (
    <section className="team">
      <div className="team__header">
        <Navbar />
        <SectionHeader>our team</SectionHeader>
      </div>
      <div className="team__members">
        <TeamMember
          img={Avatar}
          name="Colleague Name"
          position="CEO"
          description="Ut ultricies faucibus odio, gravida elementum ligula suscipit elementum. Nam dapibus odio nec arcu mattis, id placerat massa posuere. Praesent vitae sodales tellus, non facilisis dui."
        />
        <TeamMember
          img={Avatar}
          name="Colleague Name"
          position="CEO"
          description="Ut ultricies faucibus odio, gravida elementum ligula suscipit elementum. Nam dapibus odio nec arcu mattis, id placerat massa posuere. Praesent vitae sodales tellus, non facilisis dui."
        />
        <TeamMember
          img={Avatar}
          name="Colleague Name"
          position="CEO"
          description="Ut ultricies faucibus odio, gravida elementum ligula suscipit elementum. Nam dapibus odio nec arcu mattis, id placerat massa posuere. Praesent vitae sodales tellus, non facilisis dui."
        />
        <TeamMember
          img={Avatar}
          name="Colleague Name"
          position="CEO"
          description="Ut ultricies faucibus odio, gravida elementum ligula suscipit elementum. Nam dapibus odio nec arcu mattis, id placerat massa posuere. Praesent vitae sodales tellus, non facilisis dui."
        />
        <TeamMember
          img={Avatar}
          name="Colleague Name"
          position="CEO"
          description="Ut ultricies faucibus odio, gravida elementum ligula suscipit elementum. Nam dapibus odio nec arcu mattis, id placerat massa posuere. Praesent vitae sodales tellus, non facilisis dui."
        />
      </div>
    </section>
  )
}

export default Team
