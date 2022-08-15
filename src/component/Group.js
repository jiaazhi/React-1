import  React, { Component } from 'react';
import Button from './Button';
import '../index.css';

class Group extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      group: this.props.group,
      button: this.props.button
    };
  }

  renderGroup() {
    var groups = []
    for (let i = 0; i < this.state.group; i++) {
      groups.push(
        <div className="group">
          <h2>Box #{i + 1}</h2>
          <Button button={this.state.button} />
        </div>)
    }
    console.log("Props is")
    console.log(this.props)
    console.log("State is")
    console.log(this.state)
    console.log("renderGroup state " + this.state.group)
    return groups;

  }

  render() {
    return (
      <>
        {this.renderGroup()}
        {console.log("render props = " + this.props.group2 + " render state = " + this.state.group)}

      </>
    );
  }
}

export default Group;