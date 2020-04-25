import React from "react";
import { Menu, Container} from "semantic-ui-react";
import  Modal from '../signIuModal/LoginModal' 
import LoggedComponents from './LoggedComponents'
import {NavLink} from "react-router-dom"
  

const NavBar = () => {
  return (
    <Menu  fixed="top" inverted >
      <Container>
        <Menu.Item header as={NavLink} exact to ="/">
          <img src="/assets/logo.jpg" alt="logo" style={{marginRight: 10}} />
          Event Manager
        </Menu.Item>
        <Menu.Item name="home"/>
        <Menu.Item name="Oferta"/>
        <Menu.Item name="O nas"/>
      </Container>
      <Menu.Item fixed="right">
        {localStorage.getItem('username')==null 
            ?<Modal/>
            :<LoggedComponents/>
        }      
             
      </Menu.Item>
    </Menu>
  );
};

export default NavBar;
