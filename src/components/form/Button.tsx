import React from 'react';
import '../../styles/form.css'

type ButtonProps = {
    label: string,
  }

export default class Button extends React.Component<ButtonProps> {
    render() {
        return (
            <button className="button">{this.props.label}</button>
        )
    }
}