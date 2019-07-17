import React from 'react'
import { Link } from 'gatsby'

import './index.css'

import Layout from '../components/layout'

import { paths } from './'

const Home = () => (
  <Layout>
    <h1>Hi people</h1>
    <h2>Hi Alexander</h2>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div className="HomeLink">
      <Link to={paths.about}>Go to About</Link>
      <Link to={paths.contact}>Contact US!!!</Link>
      <Link to={paths.LaurelStreet}>Go to LaurelStreet</Link>
      <Link to={paths.EmmaStreet}>Go to EmmaStreet</Link>
    </div>
    <div className="hidden">
      <Link to={paths.success}>SUCCESS!!!</Link>
    </div>
  </Layout>
)

export default Home