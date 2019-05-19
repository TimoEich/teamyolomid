import React from 'react';
import Popup from "reactjs-popup";
import ElementCheckBoxComponent from '../ElementCheckBoxComponent/ElementCheckBoxComponent';

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

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

export interface AddFormComponentState {
    username: string,
    score: string,
    date: string,
    difficulty: string,
    elements: string[],
    myMap: Map<string, { level: string, checked: boolean }>
}

export default class AddFormComponent extends React.Component<AddFormComponentProps, AddFormComponentState> {

    constructor(props: AddFormComponentProps) {
        super(props);
        this.state = {
            username: "",
            score: "",
            date: "",
            difficulty: "",
            elements: [],
            myMap: new Map()
        };
    }

    updateInputState = <T extends string>(key: keyof AddFormComponentState, value: T) => (
        prevState: AddFormComponentState
    ): AddFormComponentState => ({
        ...prevState,
        [key]: value
    })

    updateInput = (e: any) => {
        let name: keyof AddFormComponentState = e.target.name;
        let value: string = e.target.value;
        // this.updateInputState(name, value);
        this.setState<never>({
            // ...this.state,
            [name]: value,
            myMap: new Map()
        });
        // console.log(this.state.username);
    }

    addScore = (e: any) => {
        e.preventDefault();
        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        let myElements: string[] = [];
        this.state.myMap.forEach((value: { level: string, checked: boolean }, key: string) => { if (value.checked) myElements.push(key + "(" + value.level + ")") });

        //let realDate = new Date(this.state.date).toLocaleDateString();
        //let currentNanoSeconds: number = new Date().getTime() * 1000000;
        //let fireDate = new firebase.firestore.Timestamp({ nanoseconds: currentNanoSeconds });

        //console.log(realDate);
        //console.log(fireDate);

        db.collection("eletd").add({
            name: this.state.username,
            score: this.state.score,
            date: new Date().getTime().toString(),
            difficulty: this.state.difficulty,
            elements: myElements
        });
        this.setState({
            username: "",
            score: "",
            date: "",
            difficulty: "",
            elements: [],
            myMap: new Map()
        });
    }

    handleEleLevel = (elementName: string, checked: boolean, level: string) => {
        this.state.myMap.set(elementName, { level, checked });

        console.log(this.state.myMap);
    }

    close = (close: any) => (
        <div className="form-wrapper">
            <form onSubmit={this.addScore}>
                <div className="form-title">
                    Element
                <span className="yolo-style">
                        TD
                </span>
                    Score
                </div>
                <div className="input-container">
                    <i className="fa fa-user icon" />
                    <input className="input-field" type="text" name="username" placeholder="Username" onChange={this.updateInput} value={this.state.username} />
                </div>

                <div className="input-container">
                    <i className="fas fa-list-ol icon" />
                    <input className="input-field" type="text" name="score" placeholder="Score" onChange={this.updateInput} value={this.state.score} />
                </div>

                <div className="input-container">
                    <i className="far fa-calendar-alt icon" />
                    <input className="input-field" type="date" name="date" placeholder="" onChange={this.updateInput} value={this.state.date} />
                </div>

                <div className="input-container">
                    <i className="fas fa-skull-crossbones icon" />
                    <select className="select-style" name="difficulty" onChange={this.updateInput} value={this.state.difficulty}>
                        <option value="easy">Easy</option>
                        <option value="hard">Hard</option>
                        <option value="very hard">Very Hard</option>
                        <option value="insane">Insane</option>
                    </select>
                </div>

                <div className="input-container-elements">
                    <table>
                        <ElementCheckBoxComponent eleIcon="fas fa-gem" eleName="Earth" name="earth" value="earth" onChange={this.handleEleLevel} />
                        <ElementCheckBoxComponent eleIcon="fas fa-moon" eleName="Darkness" name="darkness" value="darkness" onChange={this.handleEleLevel} />
                        <ElementCheckBoxComponent eleIcon="fas fa-fire" eleName="Fire" name="fire" value="fire" onChange={this.handleEleLevel} />
                        <ElementCheckBoxComponent eleIcon="fas fa-tint ele-icon" eleName="Water" name="water" value="water" onChange={this.handleEleLevel} />
                        <ElementCheckBoxComponent eleIcon="fas fa-sun" eleName="Light" name="light" value="light" onChange={this.handleEleLevel} />
                        <ElementCheckBoxComponent eleIcon="fas fa-leaf" eleName="Nature" name="nature" value="nature" onChange={this.handleEleLevel} />
                    </table>
                </div>

                <div className="button-container">
                    <input type="submit" className="submit-button" value="Submit" />
                    <div className="cancle-button" onClick={close}>
                        Close
                    </div>
                </div>
            </form>
        </div>
    );

    render() {
        return (
            <Popup contentStyle={modalCustomStyles} trigger={<div className="add-button"> Add </div>} modal closeOnDocumentClick>
                {this.close}
            </Popup>
        );
    }
}
