import './App.css';



import TaskInput from './components/task-input/task-input.component';
import Controls from './components/controls/controls.component';
import TaskBox from './components/task-box/task-box.component';

const App = () => {
  return (
    <div className='wrapper'>
      <TaskInput />
      <Controls />
      <TaskBox />
    </div>

  );
}

export default App;
