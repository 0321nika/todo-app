import React from 'react'

const TodoTaskList = ({id,task,action,action2}) => {
    
  return (
    <div key={id} className='tasks'>
              <span>{id}</span>
              <span>{task}</span>
              <button type="button" onClick={() => action2(id)} >უკან დაბრუნება</button>
              <button type="button" onClick={() => action(id)}>წაშლა</button>
          </div>
  )
}

export default TodoTaskList