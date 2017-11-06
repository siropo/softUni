import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './header.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <h1>Logo</h1>
                <nav>
                    <NavLink activeClassName="active-link" to="/home">Home</NavLink>
                    <NavLink activeClassName="active-link" to="/about">About</NavLink>
                </nav>
            </header>
        )
    }
}