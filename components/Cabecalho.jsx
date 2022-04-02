import React from 'react'
import './Cabecalho.css'
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default () => {

    return (
      <>
        <Navbar expand="lg" bg="dark" variant="dark">
          <Navbar.Brand><Link to="/home">Página Inicial</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <NavDropdown title="Gêneros" id="basic-nav-dropdown">
                <NavDropdown.Item><Link to="/filmes/populares">Populares</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/filmes/lancamentos">Lançamentos</Link></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Filmes" id="basic-nav-dropdown">
                <NavDropdown.Item><Link to="/filmes/populares">Populares</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/filmes/lancamentos">Lançamentos</Link></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Séries" id="basic-nav-dropdown">
                <NavDropdown.Item><Link to="/series/populares">Populares</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/series/no-ar">No Ar</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/series/avaliados">Bem Avaliadas</Link></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Atores" id="basic-nav-dropdown">
                <NavDropdown.Item><Link to="/atores/populares">Populares</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/atores/lancamentos">Lançamentos</Link></NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  }