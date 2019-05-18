import React from 'react';
import Popup from "reactjs-popup";
import ElementCheckBoxComponent from '../ElementCheckBoxComponent/ElementCheckBoxComponent';

const modalCustomStyles: any = {
    position: 'null', // to override default styles
    top: 'null',
    left: 'null',
    right: 'null',
    bottom: 'null',
    border: 'null',
    background: 'null',
};

export interface AddFormComponentProps {
}

export interface AddFormComponentState { }

export default class AddFormComponent extends React.Component<AddFormComponentState, AddFormComponentProps> {

    render() {
        return (
            <Popup contentStyle={modalCustomStyles} trigger={<div className="add-button"> Add </div>} modal closeOnDocumentClick>
                {close => (
                    <div className="form-wrapper">
                        <form action="">
                            <div className="form-title">
                                Element
                            <span className="yolo-style">
                                    TD
                            </span>
                                Score
                            </div>
                            <div className="input-container">
                                <i className="fa fa-user icon" />
                                <input className="input-field" type="text" name="username" placeholder="Username" />
                            </div>

                            <div className="input-container">
                                <i className="fas fa-list-ol icon" />
                                <input className="input-field" type="text" name="score" placeholder="Score" />
                            </div>

                            <div className="input-container">
                                <i className="far fa-calendar-alt icon" />
                                <input className="input-field" type="date" name="date" placeholder="" />
                            </div>

                            <div className="input-container">
                                <i className="fas fa-skull-crossbones icon" />
                                <select className="select-style">
                                    <option value="easy">Easy</option>
                                    <option value="hard">Hard</option>
                                    <option value="veryhard">Very Hard</option>
                                    <option value="insane">Insane</option>
                                </select>
                            </div>

                            <div className="input-container-elements">
                                <ElementCheckBoxComponent eleName="Earth" name="eleearth" value="earth" />
                                <ElementCheckBoxComponent eleName="Darkness" name="eledarkness" value="darkness" />
                                <ElementCheckBoxComponent eleName="Fire" name="elefire" value="fire" />
                                <ElementCheckBoxComponent eleName="Water" name="elewater" value="water" />
                                <ElementCheckBoxComponent eleName="Light" name="elelight" value="light" />
                                <ElementCheckBoxComponent eleName="Nature" name="elenature" value="nature" />
                            </div>

                            <div className="button-container">
                                <div className="submit-button">
                                    Submit
                                </div>
                                <div className="cancle-button" onClick={close}>
                                    Close
                                </div>
                            </div>
                        </form>
                    </div>
                )}
            </Popup>
        );
    }
}
