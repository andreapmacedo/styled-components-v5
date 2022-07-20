import styled from "styled-components"
import BasicTitle from "./components/BasicTitle"
import { DefaultButton } from "./components/Buttons"

function App() {
  return (
    <div style={{ padding: '2rem', backgroundColor: "white"}}>
      <BasicTitle>styled component</BasicTitle>
      <DefaultButton>click me</DefaultButton>
    </div>  
  )
}

export default App
