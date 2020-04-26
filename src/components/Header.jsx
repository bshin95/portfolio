import React, { Component } from "react"
import styled, { css } from "styled-components"
import Social from "./Social"

const HeaderContainer = styled.div`
  padding: 4rem 0rem;
`
const H1 = styled.h1`
  display: flex;
  padding: 0 6rem;
  margin: 0 auto;
  font-size: 3.5rem;
  font-family: ${(props) => props.theme.font};
  font-weight: bold;
`

const P = styled.p`
  display: flexbox;
  padding: 0rem 6rem;
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
      <HeaderContainer>
        <H1>Hello World</H1>
        <P>
          My name is <Span>Bryan Shin</Span>.
        </P>
        <P>
          I am a <Span>Frontend Developer</Span>.
        </P>
        <Social />
      </HeaderContainer>
    )
  }
}

export default Header
