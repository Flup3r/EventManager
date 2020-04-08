import React from "react";
import { Menu, Container, Button} from "semantic-ui-react";
import  Example from './LoginModal' 
  

const NavBar = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
          <img src="/assets/logo.jpg" alt="logo" style={{marginRight: 10}} />
          Event Manager
        </Menu.Item>
        <Menu.Item name="home" />
        <Menu.Item name="something" />
        <Menu.Item name="something2" />
      </Container>
      <Menu.Item fixed="right">
        <Example></Example>
      </Menu.Item>
    </Menu>
  );
};

export default NavBar;
