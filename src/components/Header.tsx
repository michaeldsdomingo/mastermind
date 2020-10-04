import React from 'react';
import '../styles/header.css';

export default class Header extends React.Component {
    render() {
        return (
            <div id="header">
                <span className="bold">image </span>
                <span>search</span>
            </div>
        )
    }
}