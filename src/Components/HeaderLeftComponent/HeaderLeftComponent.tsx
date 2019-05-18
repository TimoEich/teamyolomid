import React from 'react';

export interface HeaderLeftComponentProps { }

export interface HeaderLeftComponentState { }

export default class HeaderLeftComponent extends React.Component<HeaderLeftComponentState, HeaderLeftComponentProps> {

    render() {

        return (
            <div className="header-left-wrapper">
                <div className="page-title-wrapper-left">
                    <div className="page-title-wrapper-title">
                        ELEMENT<span className="td-text-style">TD</span>LADDER
                    </div>
                    <div className="page-title-wrapper-text">
                        Welcome to our very competetive Element TD inHouse Ladder!<br /> Where you will lose your Friends but win Stuff!
                    </div>
                </div>
            </div>
        );
    }
}