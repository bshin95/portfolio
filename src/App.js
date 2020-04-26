import React from "react"
import { ThemeProvider } from "styled-components"
import "./App.css"

import Header from "./components/Header"
import BodyContainer from "./components/BodyContainer"

const theme = {
  font: "Assistant",
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div>
          <Header />
        </div>
        <BodyContainer />
      </div>
    </ThemeProvider>
  )
}

export default App
