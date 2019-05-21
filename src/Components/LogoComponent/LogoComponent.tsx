import React from 'react';

export interface LogoComponentProps { }

export interface LogoComponentState { }

export default class LogoComponent extends React.Component<LogoComponentProps, LogoComponentState> {

    logoGlow(counter: any) {
        if (counter == 10) {
            return (
                <div className="tym-logo">
                    Team
                    <span className="yolo-style" onClick={counter + 1}>Yolo10</span>
                    Mid
                </div>
            );
        }
        else {
            return (
                <div className="tym-logo">
                    Team
                    <span className="yolo-style" onClick={counter + 1}>Yolo</span>
                    Mid
                </div>
            );
        }
    };

    render() {

        return (
            <div className="logo-wrapper">
                {this.logoGlow(0)}
            </div>
        );
    }
}