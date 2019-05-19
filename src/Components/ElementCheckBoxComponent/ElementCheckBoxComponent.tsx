import React from 'react';

export interface ElementCheckBoxComponentProps {
    eleName: string;
    name: string;
    value: string;
    eleIcon: string;
    onChange: ((elementLevel: string, checked: boolean, level: string) => void)
}

export interface ElementCheckBoxComponentState {
    checked: boolean,
    level: string
}

export default class ElementCheckBoxComponent extends React.Component<ElementCheckBoxComponentProps, ElementCheckBoxComponentState> {

    constructor(props: ElementCheckBoxComponentProps) {
        super(props);
        this.state = {
            checked: false,
            level: "1"
        }
    }

    handleElementSelection = (e: any) => {
        let checked = e.target.checked;
        this.setState({ checked });
        this.props.onChange(this.props.name, checked, this.state.level);
    }

    handleLevelSelection = (e: any) => {
        let level: string = e.target.value;
        this.setState({ level });
        this.props.onChange(this.props.name, this.state.checked, level);
    }

    elementInput({ checked }: ElementCheckBoxComponentState, { eleName, name, value, eleIcon }: ElementCheckBoxComponentProps) {
        if (!checked) {
            return (
                <tr className="ele-rows">
                    <td>
                        <div>
                            <i className={eleIcon} />
                        </div>
                    </td>
                    <td className="ele-col-align-left">
                        <div>
                            <input type="checkbox" checked={checked} name={name} value={value} onChange={(e: any) => this.handleElementSelection(e)} />{eleName}
                        </div>
                    </td>
                </tr>
            );
        } else {
            return (
                <tr className="ele-rows">
                    <td>
                        <div>
                            <i className={eleIcon} />
                        </div>
                    </td>
                    <td className="ele-col-align-left">
                        <div>
                            <input type="checkbox" checked={checked} name={name} value={value} onChange={(e: any) => this.handleElementSelection(e)} />{eleName}
                        </div>
                    </td>
                    <td>
                        Level: <select name="level" onChange={(e: any) => this.handleLevelSelection(e)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </td>
                </tr>
            );
        }
    }

    render() {
        return this.elementInput(this.state, this.props);
    }
}