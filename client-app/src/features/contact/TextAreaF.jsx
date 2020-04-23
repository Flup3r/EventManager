import React, {Component} from 'react'
import { TextArea } from 'semantic-ui-react'

class TextAreaF extends Component {
    render() {
        return (
            <div className='form-group'>
                <label htmlFor={this.props.name}>{this.props.name} *</label>
                <TextArea
                name={this.props.name}
                id={this.props.id}
                className={this.props.className}
                required={this.props.required}
                rows={this.props.rows}
                onChange={this.props.onChange}
                value={this.props.value}
                />
                <span className='error'>{this.props.error}</span>
            </div>
        )
    }
}

export default TextAreaF