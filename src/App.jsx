
import { Component } from 'react';

import './App.css';
import TaskLists from './components/TasksList';


class App extends Component{
  render(){
    return(
      <div>
        <TaskLists/>
      </div>
    )
  }
}
export default App