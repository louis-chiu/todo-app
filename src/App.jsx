import InputBar from './components/InputBar';
import ProgressBar from './components/ProgressBar';
import TodoList from './components/TodoList';
import ToggleButton from './components/ToggleButton';

function App() {
  return (
    <main className='h-[44rem] aspect-[9/16] bg-gradient-to-b from-primary-200 to-primary-300 font-mono text-primary-800 rounded-md py-8'>
      <header className='px-8'>
        <h1 className='text-3xl'>Todo List</h1>
        <p className=' text-sm text-primary-900 text-opacity-60'>
          Add things to do
        </p>
      </header>

      <hr className='mx-8 border-primary-900 border-opacity-70 border-[1.5px] rounded-sm my-2' />

      <ProgressBar />
      <TodoList />

      <hr className='mx-8 border-primary-900 border-opacity-70 border-[1.5px] rounded-sm my-2' />

      <ToggleButton />

      <InputBar />
    </main>
  );
}

export default App;
