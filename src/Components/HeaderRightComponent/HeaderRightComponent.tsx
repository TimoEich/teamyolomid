import React from 'react';

export interface HeaderRightComponentProps {
}

export interface HeaderRightComponentState {
}

export default class HeaderRightComponent extends React.Component<HeaderRightComponentProps, HeaderRightComponentState> {
    constructor(props: HeaderRightComponentProps) {
        super(props);
        this.state = {
            latestWinner: "",
        }
    }

    render() {
        var latestWinner: string = "Flefffffff";
        return (
            <div className="header-right-wrapper">
                <div className="page-title-wrapper-right">
                    <div className="page-title-wrapper-title">
                        INFO<span className="td-text-style">TAB</span>
                    </div>
                    <div className="page-title-wrapper-text">
                        <table>
                            <tbody>
                                <tr>
                                    <td><span>Season</span></td>
                                    <td>01.06 - 01.07</td>
                                </tr>
                                <tr>
                                    <td><span>Reward</span></td>
                                    <td>
                                        <div className="reward-button">
                                            Click
                                    </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span>Last Winner</span></td>
                                    <td>{latestWinner}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}