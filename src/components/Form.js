import React, { Component } from "react"
// import "./form.css"

export class Form extends Component {
  state = {
    Name: "",
    Question: "",
    Phonenumber: "",
  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }
  handleSubmit = event => {
    event.preventDeault()
    alert(`  `)
  }
  render() {
    return (
      <div>
        <div>
          <h1>Let's talk together</h1>
          <h2>Phone number?</h2>
        </div>
        <form
          className="Form"
          name="contact"
          method="post"
          action="/success"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <label for="Name">
            Your Name:
            <input
              type="text"
              class="form-control"
              id="name"
              name="name"
              placeholder="Your Name:"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Your Phone Number:
            <input
              type="tel"
              class="form-control"
              id="phone"
              name="phone"
              placeholder="Your Phone Number"
              value={this.state.phonenumber}
              onChange={this.handleInputChange}
            />
          </label>
          <label for="Question">
            Your Question:
            <textarea
              type="text"
              class="form-control"
              id="question"
              name="question"
              placeholder="Your Question"
              value={this.state.question}
              onChange={this.handleInputChange}
            />
          </label>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Clear" />
            </li>
          </ul>
          {/* <button type="submit">Submit</button> */}
        </form>
      </div>
    )
  }
}

export default Form