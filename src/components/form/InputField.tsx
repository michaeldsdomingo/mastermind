import React from 'react';
import '../../styles/form.scss'

type InputFieldProps = {
    query: string,
    setQuery: (query: string) => void
}

export default class InputField extends React.Component<InputFieldProps> {
    handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.setQuery(event.target.value);
    }

    render() {
        return (
            <input className="form-field" placeholder="Query" onChange={this.handleQueryChange} value={this.props.query}/>
        )
    }
}