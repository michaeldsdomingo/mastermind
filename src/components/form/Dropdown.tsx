import React from 'react';
import '../../styles/form.scss'

export default class Dropdown extends React.Component {
    render() {
        return (
            <div id="dropdown-container">
                <div id="dropdown-inner-container">
                    <div className="rectangle form-field"></div>
                    <select className="form-field pos-absolute" id="select-field">
                        <option className="placeholder">COLLECTION</option>
                        <option className="dropdown-option">Featured</option>
                        <option>Wallpapers</option>
                        <option>Nature</option>
                        <option>Textures  Patterns</option>
                        <option>Architecture</option>
                    </select>
                </div>
                
            </div>
        )
    }
}