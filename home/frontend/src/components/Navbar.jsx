import React from 'react'
import styled from 'styled-components'

function Navbar() {
    return (
        <div>
        <NavContainer>
            <h2>Navbar <span>Responsive</span></h2>
        </NavContainer>
        </div>
    )
}

export default Navbar

const NavContainer = styled.nav