import React, { Component } from "react"

class TextContainer extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.header}</h3>
        <p>{this.props.body}</p>
      </div>
    )
  }
}

export default TextContainer
