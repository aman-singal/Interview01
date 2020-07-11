import React from 'react'
import {Navbar , Form , FormControl , NavDropdown , Button , Nav} from 'react-bootstrap'
import Logo from './LogoBig'
function NavBarReact() {
    return (
        <div>
        <Navbar bg="white" expand="lg" style={{height: '50px'}} >
            
                <Navbar.Brand href="#home"> <Logo /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{width: '532px' , height: '30px' , marginRight: '0px' , marginTop: '20px' , marginLeft: '20px'}}/>
                    <Button variant="success" style={{height: '30px' , textAlign: 'center' , justifyContent: 'center'}}>Search</Button>
                    </Form>
                </Navbar.Collapse>
        </Navbar>
        </div>
    )
}

export default NavBarReact
