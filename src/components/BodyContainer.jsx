import React, { Component } from "react"
import styled from "styled-components"

import Projects from "./Projects"

const Div = styled.div`
  padding: 1.5rem 8rem;

  @media (max-width: ${(props) => props.theme.tablet}) {
    padding: 0rem;
  }

  @media (max-width: ${(props) => props.theme.mobile}) {
    padding: 1rem;
  }
`

class BodyContainer extends Component {
  render() {
    return (
      <Div>
        <Projects
          header="React: Portfolio"
          body="For my past projects, I typically styled my components using vanilla CSS. In efforts to step out of an old habit, I decided to style my portfolio page using styled components."
          technologies="React, Javascript, HTML, CSS, Styled Components"
          projectLinkFive
          projectFive
        />
        <Projects
          header="React with Ruby on Rails: Airbnb App"
          body="This is an Airbnb-like app that allows users to host their homes as well as book other homes. Users can create their listings on a page that will save to their own database. In the account settings page, users can edit their listings or delete them."
          technologies="Ruby, Ruby on Rails, ReactJS, Javascript, HTML, CSS"
          projectLinkFour
          projectFour
        />
        <Projects
          header="React with MongoDB and Express: MyFavFlix App"
          body="This is an app that allows users to search through an a database of movies pulled from the OMDB API. Users can then go to their favorite lists and create movies that they love. Users are required to create accounts in order to create their own listings"
          technologies="ReactJS, MongoDB, Express, Javascript, HTML, CSS"
          projectLinkThree
          projectThree
        />
        <Projects
          header="React: New York Times App"
          body="This is a New York Times app built using the New York Times API. The homepage displays the top trending news on the New York Times. Users can also search for news or navigate through the header to search through topics."
          technologies="ReactJS, Javascript, HTML, CSS"
          projectLinkTwo
          projectTwo
        />
        <Projects
          header="Javascript and HTML: Stock Market app"
          body="This is a stock market tracker app using IEX Cloud's API. Users can search for any stock listed on the NYSE and NASDAQ stock exchanges. After users search the stock, a 30-day chart will also render on the side. The chart is made using Google Charts."
          technologies="Javascript, HTML, CSS"
          projectLinkOne
          projectOne
        />
      </Div>
    )
  }
}

export default BodyContainer
