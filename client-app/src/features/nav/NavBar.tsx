import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";

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
        <Button positive content="Login" />
      </Menu.Item>
    </Menu>
  );
};

export default NavBar;
