import React, { Component } from "react"
import styled, { css } from "styled-components"
import Social from "./Social"

const HeaderContainer = styled.div`
  padding: 4rem 0rem;

  @media (max-width: ${(props) => props.theme.tablet}) {
    padding: 0;
    padding-top: 1rem;
  }

  @media (max-width: ${(props) => props.theme.mobile}) {
    padding: 0 1rem;
    padding-top: 1rem;
  }
`
const H1 = styled.h1`
  display: flex;
  padding: 0 8rem;
  margin: 0 auto;
  font-size: 3.5rem;
  font-family: ${(props) => props.theme.font};
  font-weight: bold;

  @media (max-width: ${(props) => props.theme.tablet}) {
    padding: 0 3rem;
  }

  @media (max-width: ${(props) => props.theme.mobile}) {
    padding: 0rem;
    font-size: 2.5rem;
  }
`

const P = styled.p`
  display: flexbox;
  padding: 0rem 8rem;
  margin: 0 auto;
  font-size: 1.75rem;
  font-family: ${(props) => props.theme.font};
  color: black;

  ${(props) =>
    props.primary &&
    css`
      color: #008080;
    `}

  @media (max-width: ${(props) => props.theme.tablet}){
    padding: 0 3rem;
  }

  @media (max-width: ${(props) => props.theme.mobile}){
    padding: 0;
    font-size: 1.5rem;
  }
`

const Span = styled.span`
  color: #008080;
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
