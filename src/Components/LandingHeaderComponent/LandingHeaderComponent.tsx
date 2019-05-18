import React from 'react';

export interface LandingHeaderComponentProps { }

export interface LandingHeaderComponentState { }

export default class LandingHeaderComponent extends React.Component<LandingHeaderComponentState, LandingHeaderComponentProps> {

    render() {

        return (
            <div className="landing-header-wrapper">
                <div className="landing-header-title-wrapper">
                    <div className="landing-header-title-text">
                        ELEMENT<span className="td-text-style">TD</span>LADDER
                    </div>
                    <div className="landing-header-normal-text">
                        Welcome to our very competetive Element TD inHouse Ladder!<br /> Where you will lose your Friends but win Stuff!
                    </div>
                </div>

                <div className="landing-header-title-wrapper">
                    <div className="landing-header-title-text">
                        ELEMENT<span className="td-text-style">TD</span>LADDER
                    </div>
                    <div className="landing-header-normal-text">
                        Welcome to our very competetive Element TD inHouse Ladder!<br /> Where you will lose your Friends but win Stuff!
                    </div>
                </div>

                <div className="landing-header-title-wrapper">
                    <div className="landing-header-title-text">
                        ELEMENT<span className="td-text-style">TD</span>LADDER
                    </div>
                    <div className="landing-header-normal-text">
                        Welcome to our very competetive Element TD inHouse Ladder!<br /> Where you will lose your Friends but win Stuff!
                    </div>
                </div>
            </div>
        );
    }
}