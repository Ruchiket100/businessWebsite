import styled from "styled-components"
const Navbar = () => {
    
    return (
        <NavBar>
            <Logo>YourWrk</Logo>
            <Navs>
                <Nav>Home</Nav>
                <Nav>Resources</Nav>
                <Nav>Enterprice</Nav>
                <Nav>Pricing</Nav>
            </Navs>
        </NavBar>
    )
}

export default Navbar

const NavBar = styled.div`
    width: 80%;
    height: 99px;
    margin: 0 auto;
    background-color: blue;
`
const Navs = styled.ul`
    display: flex;
    flex-direction: row;
`
const Nav = styled.li`
    font-size: 16px;
`
const Logo = styled.h1`
    font-size: 32px;
`
