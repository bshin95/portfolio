import React, { Component } from "react"
import styled, { css } from "styled-components"

const H1 = styled.h1`
  display: flex;
  padding: 0 2rem;
  margin: 0 auto;
  font-size: 3.5rem;
  font-family: ${(props) => props.theme.font};
  font-weight: bold;
`

const P = styled.p`
  display: flexbox;
  padding: 0rem 2rem;
  margin: 0 auto;
  font-size: 1.75rem;
  font-family: ${(props) => props.theme.font};
  color: black;

  ${(props) =>
    props.primary &&
    css`
      color: teal;
    `}
`

const Span = styled.span`
  color: teal;
`

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <H1>Hello World</H1>
        <P>
          My name is <Span>Bryan Shin</Span>.
        </P>
        <P>
          I am a <Span>Frontend Developer</Span>.
        </P>
      </div>
    )
  }
}

export default Header
