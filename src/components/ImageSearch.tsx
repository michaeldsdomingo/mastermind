import React from 'react';
import ChameleonIcon from './icon/ChameleonIcon';
import Header from './Header';
import InputField from './form/InputField';
import Dropdown from './form/Dropdown';
import Button from './form/Button';
import '../styles/image-form.scss';
import {ImagesState} from '../types/ImagesState';

type ImageSearchProps = {
    direction: string,
    query: string,
    setQuery: (query: string) => void,
    setImages: (images: ImagesState) => void,
    page: number,
    setTotal: (total: number) => void,
}



export default class ImageSearch extends React.Component<ImageSearchProps> {
    render() {
        return (
            <div className="background-dark-blue" id="image-search">
                <div className="chameleon-icon-container">
                    <ChameleonIcon />
                </div>
                <div className="header-container">
                    <Header />
                </div>
                <div className="input-field-container">
                    <InputField query={this.props.query} setQuery={this.props.setQuery}/>
                </div>
                <div className="dropdown-container">
                    <Dropdown />
                </div>
                <div className="search-button-container">
                    <Button label="SEARCH" setImages={this.props.setImages} query={this.props.query} isRedirect={true} page={this.props.page} setTotal={this.props.setTotal}/>
                </div>
            </div>
        )
    }
}