import styled from "styled-components"

const BasicTitle = styled.h1`
  text-align: center;
  text-transform: capitalize;
`


function App() {
  return (
    <div style={{ padding: '2rem', backgroundColor: "white"}}>
      <h1 className="title">Styled Components </h1>
      <BasicTitle>styled component</BasicTitle>
      <BasicTitle>styled component</BasicTitle>
      <BasicTitle>styled component</BasicTitle>
      <BasicTitle>styled component</BasicTitle>
      <BasicTitle>styled component</BasicTitle>
      <button className="btn">click me</button>
    </div>  
  )
}

export default App
