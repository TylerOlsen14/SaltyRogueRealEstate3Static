import React from "react"
import { Link } from 'react-router-dom'

import Layout from "../components/Layout"

const About = () => {
  return(
    <Layout>
    <div>
      <div>
        <h1>What ABOUT me?</h1>
        <h2>Yes, Tucker is my wingman and a dog</h2>
      </div>
      <Link to="./home">Home</Link>
      <Link to="./contact">Contact</Link>
    </div>
  </Layout>
  )
}

export default About