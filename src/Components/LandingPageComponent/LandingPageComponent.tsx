import React from 'react';

export interface LandingPageComponentProps { }

export interface LandingPageComponentState { }

export default class LandingPageComponent extends React.Component<LandingPageComponentProps, LandingPageComponentState> {

    render() {
        return (
            <main className="main-wrapper">
                <div className="mainarea-background">
                    <div className="welcome-text-header">
                        This is<br /> Team
                    <span className="yolo-style-mainarea">
                            Yolo
                    </span>
                        Mid
                </div>
                    <div className="welcome-text">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut<br />
                        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                        et ea rebum.
                    </div>
                </div>
            </main>
        );
    }
}