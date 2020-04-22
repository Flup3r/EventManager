import React from 'react'
import { Button, Header, Grid, Form, Segment} from 'semantic-ui-react'

    

const LoginDescription = () => (
    
    
    
        <Grid textAlign='center' style={{ height: '60vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 400 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    Sing in
                </Header>
                <Form size='large'>
                    <Segment stacked>
                        <Form.Input 
                            fluid icon='user' 
                            iconPosition='left' 
                            placeholder='E-mail address' 
                        />
                        <Form.Input
                            fluid icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                        />

                    <Button color='teal' fluid size='large'>
                        Login
                    </Button>
                    </Segment>
                </Form>            
            </Grid.Column>
        </Grid>
        
)

export default LoginDescription