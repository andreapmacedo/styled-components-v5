import styled from 'styled-components'
import { Button } from '@material-ui/core'

const StyledBtn = styled(Button)`
  text-transform: capitalize;
`

function App() {
  return (
    <div style={{ padding: '2rem', backgroundColor: "white"}}>
      <Button color="primary" variant="contained">hello world</Button>
      <StyledBtn color="primary" variant="contained">hello world</StyledBtn>
    </div>  
  )
}

export default App
