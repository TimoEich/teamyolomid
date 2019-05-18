import React from 'react';
import * as firebase from 'firebase/app';

export interface ElementTableComponentProps { }

export interface ElementTableComponentState {
    data: [];
}

export default class ElementTableComponent extends React.Component<ElementTableComponentProps, ElementTableComponentState> {
    rows: any = [];

    constructor(props: ElementTableComponentProps) {
        super(props);
        this.state = {
            data: [],
        }
        this.readData();
    }

    readData() {
        firebase.firestore().collection("eletd").get().then((snapshot: any) => {

            // this.rows = [];
            // snapshot.forEach((doc: any) => {
            //     this.rows.push(doc.data());
            //     console.log("firebase data:");
            //     console.log(doc.data());
            // });

            // this.buildHtmlTable(this.rows);
            this.setState({
                data: snapshot,
            })
        });
    }

    createIcon(iconColor: any, type: any, level: any) {
        if (!level) {
            level = "";
        }
        let iconStyle = {
            color: iconColor
        }
        return <span><span style={iconStyle}> <i className={"fas fa-" + type}></i> </span> <span>{level}</span></span>;
    }

    buildIcons(elements: any) {
        let test = elements + '';
        var singleElements = test.split(",");
        var hasFire = 0;
        var hasLight = 0;
        var hasDarkness = 0;
        var hasEarth = 0;
        var hasWater = 0;
        var hasNature = 0;

        var fireLevel = 0;
        var lightLevel = 0;
        var darknessLevel = 0;
        var earthLevel = 0;
        var waterLevel = 0;
        var natureLevel = 0;
        singleElements.forEach((element: any) => {
            let elementSplit = element.split("(");
            switch (elementSplit[0]) {
                case "fire":
                    {
                        hasFire = 1;
                        fireLevel = elementSplit[1].substring(0, 1);
                        break;
                    }
                case "water":
                    {
                        hasWater = 1;
                        lightLevel = elementSplit[1].substring(0, 1);
                        break;
                    }
                case "light":
                    {
                        hasLight = 1;
                        darknessLevel = elementSplit[1].substring(0, 1);
                        break;
                    }
                case "darkness":
                    {
                        hasDarkness = 1;
                        earthLevel = elementSplit[1].substring(0, 1);
                        break;
                    }
                case "earth":
                    {
                        hasEarth = 1;
                        waterLevel = elementSplit[1].substring(0, 1);
                        break;
                    }
                case "nature":
                    {
                        hasNature = 1;
                        natureLevel = elementSplit[1].substring(0, 1);
                        break;
                    }
            }
        });


        var icons = [];
        var grey = "#dadada";

        icons.push(this.createIcon(hasFire ? "#F44336" : grey, "fire-alt", fireLevel));
        // "<span style='color:#F44336;'> <i class='fas fa-fire-alt'></i> </span>"

        icons.push(this.createIcon(hasWater ? "#2196F3" : grey, "tint", lightLevel));
        // "<span style='color:#2196F3;'> <i class='fas fa-tint'></i> </span>"

        icons.push(this.createIcon(hasLight ? "#FFEB3B" : grey, "sun", darknessLevel));
        // "<span style='color:#FFEB3B;'> <i class='fas fa-sun'></i> </span>"

        icons.push(this.createIcon(hasDarkness ? "#9C27B0" : grey, "moon", earthLevel));
        // "<span style='color:#9C27B0;'> <i class='fas fa-moon'></i> </span>"

        icons.push(this.createIcon(hasEarth ? "#795548" : grey, "gem", waterLevel));
        // "<span style='color:#795548;'> <i class='fas fa-gem'></i> </span>"

        icons.push(this.createIcon(hasNature ? "#4CAF50" : grey, "leaf", natureLevel));
        // "<span style='color:#4CAF50;'> <i class='fas fa-leaf'></i> </span>"

        return icons;
    }

    render() {
        let rows: any = [];
        this.state.data.forEach((doc: any) => {
            let cell: any = []
            var name = doc.data()["name"];
            var date = new Date(doc.data()["date"].seconds * 1000).toLocaleDateString();
            var elements = this.buildIcons(doc.data()["elements"]);
            var difficulty = doc.data()["difficulty"];
            var score = doc.data()["score"];

            cell.push(<td className="td-name-style">{name}</td>);
            cell.push(<td>{date}</td>);
            cell.push(<td className="td-elements-style">{elements}</td>);
            cell.push(<td className="td-difficulty-style">{difficulty}</td>);
            cell.push(<td className="score-style">{score}</td>);
            rows.push(<tr>{cell}</tr>);
        });


        return (
            <div className="eletable-wrapper" >
                <table className="table-main">
                    <thead className="table-header">
                        <tr>
                            <th className="ele-th-name">Name</th>
                            <th className="ele-th">Date</th>
                            <th className="ele-th">Elements</th>
                            <th className="ele-th">Difficulty</th>
                            <th className="ele-th">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}