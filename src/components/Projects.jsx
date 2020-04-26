import React, { Component } from "react"
import styled from "styled-components"
import Icons from "./Icons"

const H1 = styled.h3`
  font-size: 2rem;
  text-align: left;
`

const Img = styled.img`
  width: 100%;
  max-width: 500px;
  padding-left: 6rem;
`

const ProjectInfo = styled.div`
  width: 40%;
  text-align: left;
`

const ImgContainer = styled.div`
  width: 60%;
`

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1.5rem 0rem;
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
            src="https://images.unsplash.com/photo-1543536448-d209d2d13a1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
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
            src="https://images.unsplash.com/photo-1559599238-308793637427?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="project"
          ></Img>
        </a>
      )
    }
    return null
  }

  get renderProjectLinkOne() {
    if (this.props.projectLinkOne) {
      return <a href="https://github.com/bshin95/stock-market-api">Live code</a>
    }
    return null
  }

  get renderProjectLinkTwo() {
    if (this.props.projectLinkTwo) {
      return <a href="https://github.com/bshin95/sei-p2-react">Live code</a>
    }
    return null
  }

  get renderProjectLinkThree() {
    if (this.props.projectLinkThree) {
      return (
        <a href="https://github.com/pbutler1418/P3-Movie-Goer">Live code</a>
      )
    }
    return null
  }

  get renderProjectLinkFour() {
    if (this.props.projectLinkFour) {
      return <a href="https://github.com/bshin95/sei-p4">Live code</a>
    }
    return null
  }

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
        </ImgContainer>
      </ProjectsContainer>
    )
  }
}

export default Projects
