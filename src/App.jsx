import styled from "styled-components"
import GlobalStyles from "./styles/GlobalStyles"

function App() {
 const H1 = styled.h1`
  font-size:30px;
  font-weight: 600;`
  const Button = styled.button`
    font-size: 1.4rem;
    padding: 1.2rem 2.4rem;
    font-weight: 600;
    border: none;
    border-radius: var(--border-radius-sm);
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
    box-shadow: var(--shadow-sm);
    cursor: pointer;
  `
  const Input = styled.input`
    border: 1px solid var(--color-grey-300);
    border-radius: var(--border-radius-sm);
    background-color: var(--color-grey-0);
    padding: .8rem 1.2rem;

  `
  const StyledApp = styled.div`
    background-color: orangered ;
    padding: 20px;
  `
  return (
    <>
    <GlobalStyles/>
    <StyledApp>
      <H1>
        The Wild Oasis
      </H1>
      <Button onClick={()=>alert('Check in')}>Check in</Button>
      <Button onClick={()=>alert('Check out')}>Check out</Button>

      <Input type="number" placeholder="number of guests"></Input>
      <Input type="number" placeholder="number of guests"></Input>
      
    </StyledApp>
    </>
  )
}

export default App
