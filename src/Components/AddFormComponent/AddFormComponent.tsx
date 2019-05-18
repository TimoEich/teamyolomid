import React from 'react';

export interface AddFormComponentProps { }

export interface AddFormComponentState { }

export default class AddFormComponent extends React.Component<AddFormComponentState, AddFormComponentProps> {

    render() {
        return (
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
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>

                    <div className="input-container-elements">
                        <input className="inputbla" type="checkbox" name="vehicle1" value="Bike" /> Darkness<br />
                        <input type="checkbox" name="vehicle1" value="Bike" /> Earth<br />
                        <input type="checkbox" name="vehicle1" value="Bike" /> Fire<br />
                        <input type="checkbox" name="vehicle1" value="Bike" /> Water<br />
                        <input type="checkbox" name="vehicle1" value="Bike" /> Light<br />
                        <input type="checkbox" name="vehicle1" value="Bike" /> Nature<br />
                    </div>

                    <div className="button-container">
                        <div className="submit-button">
                            Submit
                        </div>

                        <div className="cancle-button">
                            Cancle
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}