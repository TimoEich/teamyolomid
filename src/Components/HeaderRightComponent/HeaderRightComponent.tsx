import React from 'react';

export interface HeaderRightComponentProps { }

export interface HeaderRightComponentState { }

export default class HeaderRightComponent extends React.Component<HeaderRightComponentProps, HeaderRightComponentState> {

    render() {

        return (
            <div className="header-right-wrapper">
                {/* <div className="add-button arrow">
                    Add
                </div> */}
                <div className="page-title-wrapper-right">
                    <div className="page-title-wrapper-title">
                        INFO<span className="td-text-style">TAB</span>
                    </div>
                    <div className="page-title-wrapper-text">
                        <table>
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
                                <td>Flef</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}