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


  //render
  renderButtons(n) {
    var buttons = []
    for (let i=0; i<n; i++){
      buttons.push(<Button button={i+1}
                           onClick={() => this.handleButton(this.props.group, this.props.button)}
      />);
    }
    return buttons;
  }
  handleButton(i, j) {
    alert('This is group #' + {i} + 'and button #' + {j});
  }


  render() {
  
    return (
      <div className="group">
        <h2>Box #{this.props.group}</h2>
        {this.renderButtons(this.props.button)}
      </div>
      );
    }
}
  
  export default Group;