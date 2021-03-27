import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <div>
      <Navbar bg='dark' variant='dark' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>ProShop</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic=navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='cart'>
                <i class='fas fa-shopping-cart'></i> Cart
              </Nav.Link>
              <Nav.Link href='/login'>
                <i class='fas fa-user'></i> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
