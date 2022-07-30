import React from 'react';
import Button from './Button';
import '../index.css';

class Group extends React.Component {
  
  constructor(props){
      super(props);

      this.state ={
        group: props.groupNumber,
        button: props.buttonNumber
      };
  }

  printButtons(n) {
    var buttons = []
    for (let i=0; i<n; i++){
      buttons.push(<Button button={this.props.button} />);
    }
    return buttons;
  }


  render() {
  
    return (
      <div className="group">
        <h2>Group</h2>
        <p>Number of Groups is {this.props.group}</p>
        <p>Number of Buttons is {this.props.button}</p>
        {this.printButtons(this.props.button)}
      </div>
      );
    }
}
  
  export default Group;