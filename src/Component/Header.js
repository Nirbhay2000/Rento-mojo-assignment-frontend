import React from 'react';
import { Button, Navbar,Nav,NavDropdown,FormControl,Form} from 'react-bootstrap'
import "./Header.css";
import 'bootstrap/dist/css/bootstrap.css';

export default function Header() {
 

  return (
    <>
 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQEW25IBNG2tjQ/company-logo_200_200/0/1519909630523?e=2159024400&v=beta&t=aY6TXV842fjtMgeo1KXRgNuACmV3UYsJMAYShg-wws4" style={{width:"30px",height:"30px"}} ></img>
            <Navbar.Brand href="/" className="ml-2">Rento-Mojo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="mr-auto">
                <Nav.Link href="/">Posts</Nav.Link>
                {/* <Nav.Link href="/">Paid-Material</Nav.Link> */}
                
              </Nav> 
              <Form inline>
      <FormControl type="text"value={value} onChange={this.handleChange} placeholder="Search" className="mr-sm-2" />
      
    </Form>
            </Navbar.Collapse>
          </Navbar>
    </>
  );
}