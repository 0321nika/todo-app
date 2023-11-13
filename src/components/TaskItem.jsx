import React, { Component } from 'react'

class TaskItem  extends Component{
  shouldComponentUpdate(nextProps) {
    return nextProps.id !== this.props.id || nextProps.task !== this.props.task;
  }
  
  render(){
    const {id,task,onComplete} = this.props
    console.log("dasruleba")
    return (
      <div className='tasks'>
          <span>{id}</span>
          <span>{task}</span>
          <button type='submit' onClick={() => onComplete(id)}>დასრულება</button>
      </div>
    )
  }
}

export default TaskItem