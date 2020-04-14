import React from "react";
import { Menu, Container, Button} from "semantic-ui-react";
import  LoginModal from './LoginModal' 
import LoginDescription from "./loginDescription";
  

const NavBar = () => {
  return (
    <Menu  fixed="top" inverted >
      <Container>
        <Menu.Item header>
          <img src="/assets/logo.jpg" alt="logo" style={{marginRight: 10}} />
          Event Manager
        </Menu.Item>
        <Menu.Item name="home" />
        <Menu.Item name="Oferta" />
        <Menu.Item name="O nas" />
      </Container>
      <Menu.Item fixed="right">
        <LoginModal/>
      </Menu.Item>
    </Menu>
  );
};

export default NavBar;
