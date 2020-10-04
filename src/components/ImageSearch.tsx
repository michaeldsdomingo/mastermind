import React from 'react';
import ChameleonIcon from './icon/ChameleonIcon';
import Header from './Header';
import InputField from './form/InputField';
import Dropdown from './form/Dropdown';
import Button from './form/Button';
import '../styles/image-form.css';

export default class ImageSearch extends React.Component {
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
                    <InputField />
                </div>
                <div className="dropdown-container">
                    <Dropdown />
                </div>
                <div className="search-button-container">
                    <Button label="SEARCH" />
                </div>
            </div>
        )
    }
}