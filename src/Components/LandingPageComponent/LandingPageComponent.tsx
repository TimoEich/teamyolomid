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
                    <div className="welcome-wrapper">
                        <div className="small-welcome-wrapper1">
                            <span className="small-welcome-header-text">Element<span className="small-welcome-big-letter">TD</span>Ladder</span>
                            <div className="small-welcome-normal-text">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut<br />
                                labore et dolore magna aliquyam erat,
                            </div>
                        </div>
                        <div className="small-welcome-wrapper2">
                            <span className="small-welcome-header-text">Element<span className="small-welcome-big-letter">TD</span>Ladder</span>
                            <div className="small-welcome-normal-text">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut<br />
                                labore et dolore magna aliquyam erat,
                            </div>
                        </div>
                        <div className="small-welcome-wrapper3">
                            <span className="small-welcome-header-text">Element<span className="small-welcome-big-letter">TD</span>Ladder</span>
                            <div className="small-welcome-normal-text">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut<br />
                                labore et dolore magna aliquyam erat,
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}