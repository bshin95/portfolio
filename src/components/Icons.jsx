import React, { Component } from "react"
// import styled, { css } from "styled-components"
import javascript from "../images/javascript.svg"

class Icons extends Component {
  get renderJavascriptIcon() {
    if (this.props.javascriptIcon) {
      return <img className="icon" src={javascript} alt="js-icon"></img>
    }
    return null
  }

  render() {
    return <div>{this.renderJavascriptIcon}</div>
  }
}

export default Icons
