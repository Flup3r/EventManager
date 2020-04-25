import React, {Component} from "react";
import { Button, Menu, Message, Grid} from "semantic-ui-react";
import { format } from 'react-string-format';


class LoggedComponents extends Component<any, any> {
    constructor(props: any) {
      super(props);
      this.state = {
        
      }
    }

    
logOut = () => {

    this.setState({elements: localStorage.removeItem('username')});
    this.setState({elements: window.location.reload()});
}

render(){
    return(
        <>
        <Button inverted >{`Witaj ! ${localStorage.getItem('username')} `}</Button>
        <Button inverted onClick={this.logOut }>log out</Button>
        </>
    )
}}



export default LoggedComponents;