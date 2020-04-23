import React, { Component } from "react"
import styled, { css } from "styled-components"
import { Link } from "react-router-dom"

import Icons from "./Icons"

const H1 = styled.h1`
  font-family: ${(props) => props.theme.font};
`

class Projects extends Component {
  // get renderCheckMark() {
  //   if (this.props.checkmark) {
  //     return (
  //       <img
  //         className="checkmark"
  //         src="https://freeiconshop.com/wp-content/uploads/edd/checkmark-circle-outline.png"
  //         alt="checkmark"
  //       ></img>
  //     )
  //   }
  //   return null
  // }

  // get renderLink() {
  //   if (this.props.linkTo && this.props.linkText) {
  //     return (
  //       <Link to={this.props.linkTo} className="link-start">
  //         {this.props.linkText}
  //       </Link>
  //     )
  //   }
  // }

  render() {
    return (
      <div className="projects-container">
        <div>
          <h3>{this.props.header}</h3>
          <p>{this.props.body}</p>
          <p>{this.props.technologies}</p>
          {/* <div>
          <Icons javascriptIcon />
        </div> */}
        </div>

        <div></div>
      </div>
    )
  }
}

export default Projects
