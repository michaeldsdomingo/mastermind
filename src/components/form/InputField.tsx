import React from 'react';
import '../../styles/form.css'

export default class InputField extends React.Component {
    render() {
        return (
            <input className="form-field" placeholder="Query"/>
        )
    }
}