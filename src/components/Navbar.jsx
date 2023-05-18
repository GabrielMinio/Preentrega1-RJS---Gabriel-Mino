import Nav from 'react-bootstrap/Nav';
import CartWidget from './CartWidget'

import "./style.css"

const Navbar=()=> {
  return (
    <div className='navbar'>
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/home">Inicio</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">Productos</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Contacto</Nav.Link>
      </Nav.Item>
    </Nav>
    
    <CartWidget/>
    </div>

  );
}

export default Navbar;