import styled from "styled-components"
import GlobalStyles from "./styles/GlobalStyles"
import Button from "./ui/Button"
import Input from "./ui/Input"
import Heading from "./ui/Heading"

function App() {
 

  const StyledApp = styled.div`
    background-color: orangered ;
    padding: 20px;
  `

  return (
    <>
    <GlobalStyles/>
    <StyledApp>
      <Heading as='h1'>
        The Wild Oasis
      </Heading>
      <Heading as='h2'>
        Check in and out
      </Heading>
      <Button onClick={()=>alert('Check in')}>Check in</Button>
      <Button onClick={()=>alert('Check out')}>Check out</Button>
      <Heading as='h3'>
          Form
      </Heading>

      <Input type="number" placeholder="number of guests"></Input>
      <Input type="number" placeholder="number of guests"></Input>
      
    </StyledApp>
    </>
  )
}

export default App
