import React from 'react'

const TaskItem = ({id,task,onComplete}) => {
  const handleComplete = () => {
    onComplete(id);
  };
  return (
    <div className='tasks'>
        <span>{id}</span>
        <span>{task}</span>
        <button type='submit' onClick={handleComplete}>დასრულება</button>
    </div>
  )
}

export default TaskItem