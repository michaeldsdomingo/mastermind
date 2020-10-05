import React from 'react';
import '../styles/form.css'
import ImageSearch from './ImageSearch'

type NavbarProps = {
    query: string,
    setQuery: (query: string) => void,
    setImages: (images: any) => void
}

export default class Navbar extends React.Component<NavbarProps> {
    render() {
        return (
            <div id="navbar">
                <ImageSearch direction="horizontal" setImages={this.props.setImages} query={this.props.query} setQuery={this.props.setQuery}/>
            </div>
        )
    }
}