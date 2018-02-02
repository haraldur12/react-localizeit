import React from 'react';
import { Nav, Navbar , NavItem } from 'react-bootstrap';

const Header = ({ setLang, lit, docs}) => (
<Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      React-Localizeit
    </Navbar.Brand>
  </Navbar.Header>
  <Nav> 
      <NavItem onClick={() => docs()} eventKey={1} href="#">
        {lit('docs')}
      </NavItem>
  </Nav>
  <Nav pullRight>
    <NavItem onClick={() => setLang("en")} eventKey={2} href="#">
      {lit('english')}
    </NavItem>
    <NavItem onClick={() => setLang("tr")} eventKey={3} href="#">
      {lit('turkish')}
    </NavItem>
    <NavItem onClick={() => setLang("es")} eventKey={4} href="#">
        {lit('spanish')}
    </NavItem>
  </Nav>
</Navbar>
);

export default Header;