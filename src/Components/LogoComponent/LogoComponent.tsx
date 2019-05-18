import React from 'react';

export interface LogoComponentProps { }

export interface LogoComponentState { }

export default class LogoComponent extends React.Component<LogoComponentProps, LogoComponentState> {

    render() {

        return (
            <div className="logo-wrapper">
                <div className="tym-logo">
                    Team
                    <span className="yolo-style">
                        Yolo
                    </span>
                    Mid
                </div>
            </div>
        );
    }
}