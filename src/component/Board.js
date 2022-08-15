import React, { Component } from 'react';
import Group from './Group.js';

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            group: this.props.numberOfGroups,
            button: this.props.numberOfButtons
        }
        //https://stackoverflow.com/questions/29577977/unable-to-access-react-instance-this-inside-event-handler/41272784#41272784
        //why we bind? I still dont understand ^
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getGroupInput = (event) => {
        var groupValue = event.target.value;

        if (isNaN(groupValue)){
            return (alert('This is not a number!'));
        }
        else{
        this.setState({ group: groupValue });
    }
    }

    getButtonInput = (event) => {
        var buttonValue = event.target.value;
        this.setState({ button: buttonValue });
    }

    printResult() {
        return  (
        <div className="groupDiv">
        {<Group group={this.state.group} button={this.state.button} />}
        </div>
        )
    }


    handleSubmit(event) {
        //alert('There are ' + this.state.group + ' groups and ' + this.state.button + ' buttons');
        event.preventDefault();
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>Groups: </label>
                    <input type="number" onChange={this.getGroupInput}></input>
                    <br></br>
                    <br></br>
                    <label>Buttons: </label>
                    <input type="number" onChange={this.getButtonInput}></input>
                </form>

                <p>Number of Groups is {this.state.group}</p>
                <p>Number of Buttons is {this.state.button}</p>
               {this.printResult()}

            </>
        );
    }
    // old render
    // useeffect
    /*
        render() {
            return (
                <>
                <form onSubmit={this.handleSubmit}>
                    <label>Groups: </label>
                    <input type="number" onChange={this.getGroupInput}></input>
                    <p>{this.state.groupNumber}</p>
                    <br></br>
    
                    <label>Buttons: </label>
                    <input type="number" onChange={this.getButtonInput}></input>
                </form>
    
                <p>Number of Groups is {this.state.group}</p>
                <p>Number of Buttons is {this.state.button}</p>
                <div className="groupDiv">{this.renderGroup(this.state.group)}</div>
                
                </> 
            );
        }
    */

}

export default Board;