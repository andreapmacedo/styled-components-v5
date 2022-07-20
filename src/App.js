import { BasicTitleProps, BasicTitle } from "./components/BasicTitle"
import { DefaultButton, HipsterButton } from "./components/Buttons"

function App() {
  return (
    <div style={{ padding: '2rem', backgroundColor: "white"}}>
      <BasicTitle>styled component</BasicTitle>
      <BasicTitleProps special>styled component</BasicTitleProps>
      <BasicTitleProps>styled component</BasicTitleProps>
      <DefaultButton>click me</DefaultButton>
      <HipsterButton>click me</HipsterButton>
    </div>  
  )
}

export default App
