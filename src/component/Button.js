import React, { Component } from 'react';
import '../index.css';

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            button: this.props.button //misleading, no. of buttons, clearer
        };
    }


    renderButtons() {
        var buttons = []
        for (let i = 0; i < this.state.button; i++) {
            buttons.push(
                <button>Button #{i + 1}</button>);
        }
        return buttons;
    }

    render() {

        return (
            <>
                {this.renderButtons()}
            </>
        )
    }
}


export default Button;