import './App.css';



import TaskInput from './components/task-input/task-input.component';
import Controls from './components/controls/controls.component';
import TaskBox from './components/task-box/task-box.component';
import { StatusProvider } from './context/status.context';
import { InputProvider } from './context/input.context';

const App = () => {
  return (
    <StatusProvider>
      <InputProvider>
        <div className='wrapper'>
          <TaskInput />
          <Controls />
          <TaskBox />
        </div>
      </InputProvider>
    </StatusProvider>
    
  );
}

export default App;
