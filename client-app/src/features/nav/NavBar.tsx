import React  from "react";
import {NavLink} from "react-router-dom"
import { Menu, Container, Button} from "semantic-ui-react";
import  Modal from '../signIuModal/LoginModal' 
  

const NavBar = () => {
  return (
    <Menu  fixed="top" inverted>
      <Container>
        <Menu.Item header as={NavLink} exact to ="/">
          <img src="/assets/logo.jpg" alt="logo" style={{marginRight: 10}} />
          Event Manager
        </Menu.Item>        
        <Menu.Item name="Oferta"/>
        <Menu.Item name="O nas"/>
      </Container>
      <Menu.Item fixed="right">
        <Modal/>
      </Menu.Item>
    </Menu>
  );
};

export default NavBar;
