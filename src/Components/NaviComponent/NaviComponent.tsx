import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export interface NaviComponentProps { }

export interface NaviComponentState { }

export default class NaviComponent extends React.Component<NaviComponentProps, NaviComponentState> {

    render() {
        return (
            <div className="navi-wrapper">
                {/* <ul className="tym-navigation">
                    <li className="nav-button"><a href="#">HOME</a></li>
                    <li className="nav-button"><a href="#">ELEMENT TD</a></li>
                    <li className="nav-button"><a href="#">STUFF</a></li>
                </ul> */}
                <Link to="/" className="nav-button">
                    Home
                </Link>
                <Link to="/element" className="nav-button">
                    Element Td
                </Link>
                <div className="nav-button">
                    <a href="#">Stuff</a>
                </div>
            </div>
        );
    }
}