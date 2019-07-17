import React from 'react'
import { Link } from 'react-router-dom'
// import './index.css'

import Layout from '../components/Layout'

const Home = () => (
  <Layout>
    <h1>Hi people</h1>
    <h2>Hi Alexander</h2>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div className="HomeLink">
      <Link to="./about">Go to About</Link>
      <Link to="./contact">Contact US!!!</Link>
      <Link to="./LaurelStreet">Go to LaurelStreet</Link>
      <Link to="./EmmaStreet">Go to EmmaStreet</Link>
    </div>
    <div className="hidden">
      <Link to="./success">SUCCESS!!!</Link>
    </div>
  </Layout>
)

export default Home