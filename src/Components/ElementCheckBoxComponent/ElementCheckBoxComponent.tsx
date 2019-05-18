import React from 'react';

export interface ElementCheckBoxComponentProps {
    eleName: string;
    name: string;
    value: string;
}

export interface ElementCheckBoxComponentState { checked: boolean }

export default class ElementCheckBoxComponent extends React.Component<ElementCheckBoxComponentProps, ElementCheckBoxComponentState> {

    constructor(props: ElementCheckBoxComponentProps) {
        super(props);
        this.state = {
            checked: false
        }
    }

    showEleLevel(e: any) {
        let checked = e.target.checked;
        this.setState({ checked });
    }

    jeyInput({ checked }: ElementCheckBoxComponentState, { eleName, name, value }: ElementCheckBoxComponentProps) {
        if (!checked) {
            return (<div><input type="checkbox" checked={checked} name={name} value={value} onChange={(e: any) => this.showEleLevel(e)} />{eleName}</div>);
        } else {
            return (<span>{eleName}<br /></span>);
        }
    }

    render() {
        return this.jeyInput(this.state, this.props);
    }
}