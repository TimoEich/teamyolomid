import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export interface NaviComponentProps { }

export interface NaviComponentState { }

export default class NaviComponent extends React.Component<NaviComponentProps, NaviComponentState> {

    render() {
        return (
            <div className="navi-wrapper">
                <Link to="/" className="nav-button">
                    Home
                </Link>
                <Link to="/element" className="nav-button">
                    Element Td
                </Link>
                <Link to="/" className="nav-button">
                    Stuff
                </Link>
            </div>
        );
    }
}