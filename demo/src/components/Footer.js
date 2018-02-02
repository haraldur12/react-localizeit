import React from 'react';
import { Nav, Navbar , NavItem , Button } from 'react-bootstrap';

const Header = ({ setLang, lit, docs}) => (
<Navbar fixedBottom>
  <Nav pullRight>
    <NavItem  eventKey={2} href="#">
       <Button><a href="https://github.com" rel="github"> <i className="fa fa-github"/> Github</a> </Button>  
    </NavItem>
  </Nav>
</Navbar>
);

export default Header;