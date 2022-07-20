import { BasicTitleProps, BasicTitle } from "./components/BasicTitle"
import { DefaultButton } from "./components/Buttons"

function App() {
  return (
    <div style={{ padding: '2rem', backgroundColor: "white"}}>
      <BasicTitle>styled component</BasicTitle>
      <BasicTitleProps special>styled component</BasicTitleProps>
      <BasicTitleProps>styled component</BasicTitleProps>
      <DefaultButton>click me</DefaultButton>
    </div>  
  )
}

export default App
