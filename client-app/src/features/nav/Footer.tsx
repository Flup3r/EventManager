import React, { Component } from 'react';
import { Menu, Icon, Container } from 'semantic-ui-react';
import '../../app/layout/styles.css';
class Footer extends Component {
    render() {
        return (
            
            <Menu fixed="bottom">
                <Container>
                    <Menu.Item>
                        © 2020 EventManager
                    </Menu.Item>
                    <Menu.Item name="Terms" color="grey"/>
                    <Menu.Item name="Policy"/>
                </Container>
                <Menu.Item fixed="right">
                    <Icon size="big" name="instagram"/>
                </Menu.Item>
                <Menu.Item fixed="right">
                    <Icon size="big" name="facebook official"/>
                </Menu.Item>
            </Menu>
        );
    }
}
export default Footer;


