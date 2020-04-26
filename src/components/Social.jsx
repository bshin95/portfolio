import React, { Component } from "react"
import styled, { css } from "styled-components"

const Img = styled.img`
  width: 100%;
  max-width: 50px;
  padding-right: 0.5rem;
`

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 1rem;
  padding: 0 6rem;
`

class Social extends Component {
  render() {
    return (
      <SocialContainer>
        <a href="https://github.com/bshin95">
          <Img src="https://image.flaticon.com/icons/svg/733/733553.svg"></Img>
        </a>
        <a href="https://www.linkedin.com/in/bryan-shin-b473b013b/">
          <Img src="https://image.flaticon.com/icons/svg/179/179330.svg"></Img>
        </a>
        <a href="mailto:shinbryann@gmail.com">
          <Img src="https://image.flaticon.com/icons/svg/888/888853.svg"></Img>
        </a>
      </SocialContainer>
    )
  }
}

export default Social
