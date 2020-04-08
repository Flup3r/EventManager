import React, { Component } from 'react'
import { Button, Header, Modal, Grid, Form, Segment} from 'semantic-ui-react'
import  LoginDescription from './registerDescription'
import  RegisterDescription from './loginDescription'
class ModalModalExample extends Component<any, any> {
    constructor(props: any) {
      super(props);
      this.state = {
          
        elements: <LoginDescription></LoginDescription>
      }
    }
   
    updateContentLogin = () => {
        this.setState({ elements: <RegisterDescription></RegisterDescription>});
    }  
    
    updateContentRegister = () => {
        this.setState({ elements: <LoginDescription></LoginDescription>});
    }  

    render() {
        return (
        
            <Modal trigger={<Button>Log in</Button>}>
                <Modal.Header >
                    <Button.Group attached='top' size = 'massive'>
                        <Button color='teal' onClick={this.updateContentLogin}> Sing in</Button>
                        <Button color='blue' onClick={this.updateContentRegister}>Sing up</Button>
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
export default ModalModalExample