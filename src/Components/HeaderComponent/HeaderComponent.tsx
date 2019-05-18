import React from 'react';
import LogoComponent from '../LogoComponent/LogoComponent';
import NaviComponent from '../NaviComponent/NaviComponent';

export interface HeaderComponentProps { }

export interface HeaderComponentState { }

export default class HeaderComponent extends React.Component<HeaderComponentProps, HeaderComponentState> {

    render() {
        return (
            <header className="header-wrapper">
                <div className="logo-wrapper">
                    <LogoComponent></LogoComponent>
                </div>
                <div className="navi-wrapper">
                    <NaviComponent></NaviComponent>
                </div>
            </header>
        );
    }
}