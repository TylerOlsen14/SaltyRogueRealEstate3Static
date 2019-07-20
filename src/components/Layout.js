import React from "react"
import Header from "./Header"
import Footer from './Footer'

export default ({ children }) => (
  // <div style={{ margin: `1rem auto`, maxWidth: "90%", maxHeight:50, padding: `0.1rem` }}>
  <div>
    <div className="header">
      {/* <img src={logo} style={{ width: 42, height: 42, marginTop: `0.1rem` }} /> */}
      <Header />
    </div>
    <div className="layoutBody">
      {children}      
    </div>
    <div className="footer">
      <Footer/>
    </div>
  </div>
)