import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidebar  from "./sidebar"
import styled from "styled-components"

const Main = styled.main`
  background-color: var(--color-grey-50);nd-color: orangered;

  padding: 4rem 4.8rem 6.4rem;
`
const StyledAppLayout = styled.div`
display:grid;
height:100vh;
max-width: 85vw;
grid-template-columns:26rem 1fr;
grid-template-rows:auto 1fr; `


function AppLayout() {
    return (
        <StyledAppLayout>

            <Header/>
            <Sidebar/>
            <Main>
            <Outlet/>
            </Main>
        </StyledAppLayout>
    )
}

export default AppLayout
