import React, {Component} from 'react'
import { Input } from 'semantic-ui-react'

class InputF extends Component {
    render() {
        return (
            <div className='form-group'>
                <label htmlFor={this.props.name}>{this.props.name} *</label>
                <Input
                type={this.props.type}
                name={this.props.name}
                className={this.props.className}
                required={this.props.required}
                onChange={this.props.onChange}
                value={this.props.value}
                />
                <span className='error'>{this.props.error}</span>
            </div>
        )
    }
}

export default InputF