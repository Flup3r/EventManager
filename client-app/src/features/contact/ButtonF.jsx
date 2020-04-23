import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'

class ButtonF extends Component {
    render() {
        return (
            <div className='form-group'>
                <Button
                type={this.props.type}
                name={this.props.name}
                className={this.props.className}
                required={this.props.required}
                onClick={this.props.onClick}
                >Submit Message</Button>
            </div>
        )
    }
}

export default ButtonF