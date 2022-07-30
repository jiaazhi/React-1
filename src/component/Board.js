import React, { Component } from 'react';
import Group from './Group.js';

class Board extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            group: props.groupNumber,
            button: props.buttonNumber
        }
        //https://stackoverflow.com/questions/29577977/unable-to-access-react-instance-this-inside-event-handler/41272784#41272784
        //why we bind? I still dont understand ^
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getGroupInput = (event) => {
        var groupValue = event.target.value;
        console.log(groupValue);

        this.setState({group: groupValue});
    }

    getButtonInput = (event) => {
        var buttonValue = event.target.value;
        console.log(buttonValue);

        this.setState({button: buttonValue});
    }

    handleSubmit(event) {
        alert('Group ' + this.state.group + ' Button ' + this.state.button);
        event.preventDefault();
    }

    printGroup(n) {
        var groups = []
        for ( let i = 0; i < n; i ++) {
          groups.push(<Group group={i+1} button={this.state.button}/>)
        }
        return groups;
      }
    

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
                
                <p>Number of Groups is {this.state.group}</p>
                <p>Number of Buttons is {this.state.button}</p>
                <p>{this.printGroup(this.state.group)}</p>
            </form>
            
            </> 
        );
    }

}

export default Board;