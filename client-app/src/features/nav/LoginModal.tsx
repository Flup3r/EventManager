import React, { Component } from 'react'
import { Button, Header, Modal, Grid, Form, Segment} from 'semantic-ui-react'
import  LoginDescription from './registerDescription'
import  RegisterDescription from './loginDescription'
class LoginModal extends Component<any, any> {
    constructor(props: any) {
      super(props);
      this.state = {
          
        elements: <LoginDescription/>
      }
    }
   
    updateContentLogin = () => {
        this.setState({ elements: <LoginDescription/>});
    }  
    
    updateContentRegister = () => {
        this.setState({ elements: <RegisterDescription/>});
    }  

    render() {
        return (
        
            <Modal trigger={<Button inverted>Sign in</Button>}>
                <Modal.Header >
                    <Button.Group attached='top' size = 'massive'>
                        <Button color='teal' onClick={this.updateContentLogin}> Sign in</Button>
                        <Button color='blue' onClick={this.updateContentRegister}>Sign up</Button>
                    </Button.Group>
                </Modal.Header>
                <Modal.Content>
                <Modal.Description>
                    {this.state.elements}
                </Modal.Description>
                </Modal.Content>
            </Modal>
        )
        }
    }
export default LoginModal
