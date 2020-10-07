import React from 'react';
import '../styles/form.scss'
import ImageSearch from './ImageSearch'
import {ImagesState} from '../types/ImagesState';

type NavbarProps = {
    query: string,
    setQuery: (query: string) => void,
    setImages: (images: ImagesState) => void,
    page: number,
    setTotal: (total: number) => void
}

export default class Navbar extends React.Component<NavbarProps> {
    render() {
        return (
            <div id="navbar">
                <ImageSearch 
                    direction="horizontal" 
                    setImages={this.props.setImages} 
                    query={this.props.query} 
                    setQuery={this.props.setQuery}
                    page={this.props.page}
                    setTotal={this.props.setTotal}
                />
            </div>
        )
    }
}