import React from 'react'
import {Navbar , Form , FormControl , Image , Button , Nav} from 'react-bootstrap'
import Logo from './LogoBig'
import {Search } from 'react-bootstrap-icons'

function NavBarReact() {
    return (
        <div>
        <Navbar bg="white" expand="lg" style={{height: '50px'}} >
            
                <Navbar.Brand href="#home"> <Logo /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="" style={{width: '532px' , height: '30px' , marginRight: '0px' , marginLeft: '20px' , borderRadius: '0px'}}/>
                    <Button variant="success" style={{height: '30px' , justifyContent: 'center'  , alignItems: 'center' , borderRadius: '0px'}}><Search /></Button>
                    <Image style={{marginLeft: '30px'}} src="https://www.bigbasket.com/media/uploads/banner_images/All_bbstar_DT_1_150x30_23rdOct.png" rounded />
                    </Form>
                </Navbar.Collapse>
        </Navbar>
        </div>
    )
}

export default NavBarReact
