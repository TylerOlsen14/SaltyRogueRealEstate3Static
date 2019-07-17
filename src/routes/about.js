import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"

import { paths } from './'

const About = () => {
  return(
    <Layout>
      <div>
        <h1>What ABOUT me?</h1>
        <h2>Yes, Tucker is my wingman and a dog</h2>
      </div>
      <Link to={paths.home}>Home</Link>
      <Link to={paths.contact}>Contact</Link>
    </Layout>
  )
}

export default About