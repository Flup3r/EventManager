import React, { Component } from 'react'
import { Button, Modal} from 'semantic-ui-react'
import  ValidatedLogin from './ValidatedLoginForm'
import  ValidatedRegister from './ValidatedRegisterForm'
class LoginModal extends Component<any, any> {
    constructor(props: any) {
      super(props);
      this.state = {
          
        elements: <ValidatedLogin/>
      }
    }
   
    updateContentLogin = () => {
        this.setState({ elements: <ValidatedLogin/>});
    }  
    
    updateContentRegister = () => {
        this.setState({ elements: <ValidatedRegister/>});
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
