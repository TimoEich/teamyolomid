import React from 'react';

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
                <div className="nav-button">
                    <a href="#">Home</a>
                </div>
                <div className="nav-button">
                    <a href="#">Element Td</a>
                </div>
                <div className="nav-button">
                    <a href="#">Stuff</a>
                </div>
            </div>
        );
    }
}