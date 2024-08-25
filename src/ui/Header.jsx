import styled from "styled-components"

function Header() {
    const StyledHeader = styled.header`
        
        background-color: var(--color-grey-0);nd-color: orangered;
        padding: 1.2rem 4.8rem;
        border-bottom: 1px solid var(--color-grey-100);

    `
    return (
        <StyledHeader>
            header
        </StyledHeader>
    )
}

export default Header
