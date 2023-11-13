import React, { Component } from 'react';

class TodoTaskListClass extends Component {
  shouldComponentUpdate(nextProps) {
    
    return !(
      nextProps.id == this.props.id ||
      nextProps.task == this.props.task ||
      nextProps.action == this.props.action ||
      nextProps.action2 == this.props.action2
    );
  }

  render() {
    const { id, task, action, action2 } = this.props;
    console.log("washla")

    return (
      <div key={id} className='tasks'>
        <span>{id}</span>
        <span>{task}</span>
        <button type="button" onClick={() => action2(id)}>უკან დაბრუნება</button>
        <button type="button" onClick={() => action(id)}>წაშლა</button>
      </div>
    );
  }
}

export default TodoTaskListClass;