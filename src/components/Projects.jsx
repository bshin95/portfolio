import React, { Component } from "react"
import styled from "styled-components"
import Icons from "./Icons"

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem 0rem;

  @media (max-width: ${(props) => props.theme.tablet}) {
    padding: 2rem 3rem;
    flex-direction: column;
  }

  @media (max-width: ${(props) => props.theme.mobile}) {
    padding: 0;
  }
`

const H1 = styled.h3`
  font-size: 2rem;
  text-align: left;

  @media (max-width: ${(props) => props.theme.mobile}) {
    font-size: 1.5rem;
  }
`

const Img = styled.img`
  width: 100%;
  max-width: 670px;
  transition: 300ms;
  :hover {
    opacity: 0.4;
  }
`

const ProjectInfo = styled.div`
  width: 40%;
  text-align: left;

  @media (max-width: ${(props) => props.theme.tablet}) {
    width: 100%;
    padding-bottom: 1.5rem;
  }

  @media (max-width: ${(props) => props.theme.mobile}) {
    padding-bottom: 0.25rem;
  }
`

const ImgContainer = styled.div`
  width: 60%;
  text-align: right;

  @media (max-width: ${(props) => props.theme.tablet}) {
    width: 100%;
    text-align: center;
  }
`

const CodeLink = styled.a`
  text-decoration: none;
  color: #008080;
`

class Projects extends Component {
  get renderProjectOne() {
    if (this.props.projectOne) {
      return (
        <a href="https://suspicious-curran-e960de.netlify.app/">
          <Img
            className="project-image"
            src="https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="project"
          ></Img>
        </a>
      )
    }
    return null
  }

  get renderProjectTwo() {
    if (this.props.projectTwo) {
      return (
        <a href="https://confident-elion-d13a70.netlify.app/">
          <Img
            classname="project-image"
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
            alt="project"
          ></Img>
        </a>
      )
    }
    return null
  }

  get renderProjectThree() {
    if (this.props.projectThree) {
      return (
        <a href="http://myfavflicks.surge.sh/">
          <Img
            className="project-image"
            src="https://i.imgur.com/TbgyuXk.jpg"
            alt="project"
          ></Img>
        </a>
      )
    }
    return null
  }

  get renderProjectFour() {
    if (this.props.projectFour) {
      return (
        <a href="https://home-hosting.surge.sh/">
          <Img
            className="project-image"
            src="https://i.imgur.com/pR7QlwG.jpg"
            alt="project"
          ></Img>
        </a>
      )
    }
    return null
  }

  get renderProjectFive() {
    if (this.props.projectFive) {
      return (
        <a href="https://www.bryan-shin.com/">
          <Img
            className="project-image"
            src="https://i.imgur.com/pR7QlwG.jpg"
            alt="project"
          ></Img>
        </a>
      )
    }
    return null
  }

  get renderProjectLinkOne() {
    if (this.props.projectLinkOne) {
      return (
        <CodeLink href="https://github.com/bshin95/stock-market-api">
          Live code
        </CodeLink>
      )
    }
    return null
  }

  get renderProjectLinkTwo() {
    if (this.props.projectLinkTwo) {
      return (
        <CodeLink href="https://github.com/bshin95/sei-p2-react">
          Live code
        </CodeLink>
      )
    }
    return null
  }

  get renderProjectLinkThree() {
    if (this.props.projectLinkThree) {
      return (
        <CodeLink href="https://github.com/pbutler1418/P3-Movie-Goer">
          Live code
        </CodeLink>
      )
    }
    return null
  }

  get renderProjectLinkFour() {
    if (this.props.projectLinkFour) {
      return (
        <CodeLink href="https://github.com/bshin95/sei-p4">Live code</CodeLink>
      )
    }
    return null
  }

  get renderProjectLinkFive() {
    if (this.props.projectLinkFive) {
      return (
        <CodeLink href="https://github.com/bshin95/portfolio">
          Live code
        </CodeLink>
      )
    }
    return null
  }

  render() {
    return (
      <ProjectsContainer>
        <ProjectInfo>
          <H1>{this.props.header}</H1>
          <p>{this.props.body}</p>
          <p>{this.props.technologies}</p>
          <p>
            {this.renderProjectLinkOne}
            {this.renderProjectLinkTwo}
            {this.renderProjectLinkThree}
            {this.renderProjectLinkFour}
            {this.renderProjectLinkFive}
          </p>
          {/* <div>
          <Icons javascriptIcon />
        </div> */}
        </ProjectInfo>
        <ImgContainer>
          {this.renderProjectOne}
          {this.renderProjectTwo}
          {this.renderProjectThree}
          {this.renderProjectFour}
          {this.renderProjectFive}
        </ImgContainer>
      </ProjectsContainer>
    )
  }
}

export default Projects
