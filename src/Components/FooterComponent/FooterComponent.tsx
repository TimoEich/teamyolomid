import React from 'react';

export interface FooterComponentProps { }

export interface FooterComponentState { }

export default class FooterComponent extends React.Component<FooterComponentProps, FooterComponentState> {

    render() {
        return (
            <div className="footer-wrapper">
                <span className="footer-text">Created with blood, sweat and tears. 2019 Jey</span>
            </div>
        );
    }
}