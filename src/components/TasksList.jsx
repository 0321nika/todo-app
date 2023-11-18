import React, { useState } from "react";
import TaskItem from "./TaskItem";
import TodoTaskList from "./TodoTaskList";

const TaskLists = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const onChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const addTask = (event) => {
    event.preventDefault();

    const task = {
      id: tasks.length + 1,
      task: inputValue,
    };

    setTasks([...tasks, task]);
    setInputValue("");
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    const updatedCompletedTasks = completedTasks.filter(
      (task) => task.id !== id
    );

    setTasks(updatedTasks);
    setCompletedTasks(updatedCompletedTasks);
  };

  const undoTask = (id) => {
    const taskToUndo = completedTasks.find((task) => task.id === id);

    if (taskToUndo) {
      const updatedCompletedTasks = completedTasks.filter(
        (task) => task.id !== id
      );

      setTasks([...tasks, taskToUndo]);
      setCompletedTasks(updatedCompletedTasks);
    }
  };

  const completeTask = (id) => {
    const taskToComplete = tasks.find((task) => task.id === id);

    if (taskToComplete) {
      const updatedTasks = tasks.filter((task) => task.id !== id);

      setTasks(updatedTasks);
      setCompletedTasks([...completedTasks, taskToComplete]);
    }
  };

  return (
    <div className="App">
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="enter your task"
          onChange={onChange}
          value={inputValue}
        />
        <button type="submit">submit</button>
      </form>
      <div className="container">
        <div className="firstList">
          <h2>შესასრულებელი</h2>
          {tasks.map((tsk) => (
            <TaskItem
              key={tsk.id}
              task={tsk.task}
              id={tsk.id}
              onComplete={completeTask}
            />
          ))}
        </div>
        <div className="secondList">
          <h2>შესრულებული</h2>
          {completedTasks.map((e) => (
            <TodoTaskList
              key={e.id}
              task={e.task}
              id={e.id}
              action={deleteTask}
              action2={undoTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskLists;