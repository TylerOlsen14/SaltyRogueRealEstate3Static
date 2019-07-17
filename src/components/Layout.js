import React from "react"
import Header from "./Header"
// import './layout.css'
import Footer from './Footer'
// import SaltyFooter from './SaltyRogueFooter'

export default ({ children }) => (
  <div style={{ margin: `1rem auto`, maxWidth: "90%", maxHeight:50, padding: `0.1rem` }}>
    <div className="header">
      {/* <img src={logo} style={{ width: 42, height: 42, marginTop: `0.1rem` }} /> */}
      <Header />
    </div>
    <div className="layoutBody">
      {children}      
    </div>
    <div className="siteLinks">
      {/* <SaltyFooter/> */}
    {/* </div>
    <div > */}
      <Footer/>
    </div>
  </div>
)