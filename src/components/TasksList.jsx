import { Component } from "react";
import TaskItem from "./TaskItem";
import TodoTaskList from "./TodoTaskList";

class TaskLists extends Component{
    state = {
        inputValue: '',
        tasks: [ ],
        completedTasks: [],
      }
      onChange = (event) => {
        const value = event.target.value
        this.setState({
          inputValue: value
        })
      }

      addTask = (event) =>{
        event.preventDefault()

        const task = {
            id: this.state.tasks.length +1,
            task: this.state.inputValue
        }

        this.setState({
            tasks: [...this.state.tasks, task],
            inputValue:''
        })

      }
      
      deleteTask = (id) => {
        const updatedTasks = this.state.tasks.filter((task) => task.id !== id);
        const updatedCompletedTasks = this.state.completedTasks.filter(
          (task) => task.id !== id
        );
        this.setState({
          tasks: updatedTasks,
          completedTasks: updatedCompletedTasks,
        });
      };

      undoTask = (id) => {
        const taskToUndo = this.state.completedTasks.find((task) => task.id === id);
        if (taskToUndo) {
          const updatedCompletedTasks = this.state.completedTasks.filter(
            (task) => task.id !== id
          );
          this.setState({
            tasks: [...this.state.tasks, taskToUndo],
            completedTasks: updatedCompletedTasks,
          });
        }
      };

      completeTask = (id) => {
        const taskToComplete = this.state.tasks.find((task) => task.id === id);
        if (taskToComplete) {
          const updatedTasks = this.state.tasks.filter((task) => task.id !== id);
          this.setState({
            id: this.state.tasks.length +1,
            tasks: updatedTasks,
            completedTasks: [...this.state.completedTasks, taskToComplete],
          });
        }
      };

    
    render(){
        return(
            <div className='App'>
        <form onSubmit={this.addTask}>
            <input type="text" placeholder='enter your task' onChange={this.onChange} value={this.state.inputValue} />
            <button type='submit'>submit</button>
          </form>
          <div className='container'>
            <div className='firstList'>
              <h2> შესასრულებელი</h2>
              {this.state.tasks.map((tsk) => (
                <TaskItem key={tsk.id} task ={tsk.task} id ={tsk.id} onComplete={this.completeTask}/>
              ))}
            </div>
            <div className='secondList'>
              <h2>შესრულებული</h2>
              {this.state.completedTasks.map((e) => (
              <TodoTaskList key={e.id} task ={e.task} id ={e.id} action={this.deleteTask} action2={this.undoTask}/>
            ))}
  
            </div>
          </div>
      </div>
        )
    }
}

export default TaskLists