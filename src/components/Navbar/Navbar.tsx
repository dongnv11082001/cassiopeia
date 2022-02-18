import { Link } from "react-router-dom"
import styled from "styled-components"

const NavbarTabs = [
    {
        text: 'Flowers',
        directTo: 'flowers'
    },
    {
        text: 'Plants',
        directTo: 'plants'
    },
    {
        text: 'Gifts',
        directTo: 'gifts'
    },
    {
        text: 'Discounts',
        directTo: 'discounts'
    },
    {
        text: 'About us',
        directTo: 'about-us'
    }
]

function Navbar() {
  return (
    <NavbarContainer>
        {NavbarTabs.map(tab => (
            <Link key={tab.text} to={tab.directTo}>{tab.text}</Link>
        ))}
    </NavbarContainer>
  )
}

const NavbarContainer = styled.nav`
    display: flex;
    align-items: center; 
    justify-content: center;
    height: 86px;
    
    & a {
        font-size: 16px;
        margin-right: 76px;
        color: #000;
    }

    & a:hover {
        opacity: 0.5;
    }
`

export default Navbar