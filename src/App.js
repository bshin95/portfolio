import React from "react"
import styled, { ThemeProvider } from "styled-components"
import "./App.css"

import Header from "./components/Header"
import Projects from "./components/Projects"

const theme = {
  font: "Assistant",
}

// const H1 = styled.h1`
//   font-size: 3.5rem;
//   font-family: ${(props) => props.theme.font};
// `

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div>
          <Header />
        </div>
        <div>
          <Projects
            header="Stock market app"
            body="This is a stock market tracker app using IEX Cloud's API."
            technologies="Javascript, HTML, CSS"
          />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
