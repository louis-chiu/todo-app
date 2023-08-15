import { FaXmark } from 'react-icons/fa6';
import { useGlobalContext } from './context';
const TodoItem = ({ id, text, isDone }) => {
  const { toggleIsDone, removeTodo } = useGlobalContext();
  return (
    <div className='relative w-full h-12 flex items-center my-2 bg-primary-100 rounded-md before:block before:w-1 before:h-full before:rounded-s-md before:bg-primary-800'>
      {/* hidden original checkbox*/}
      <input
        type='checkbox'
        name='todo'
        id={id}
        checked={isDone}
        onChange={() => toggleIsDone(id)}
        className='
          peer 
          appearance-none  
          mx-4
          w-5
          h-5 
          cursor-pointer
          rounded-[4px]
          border-[1px]
          border-primary-400 
          bg-primary-100/0
          focus:outline-none 
          checked:
          checked:border-0 
          z-10
          '
      />

      <label
        htmlFor={id}
        className={`w-[calc(100%-2rem-1.25rem-3rem)] hover:cursor-pointer text-md select-none ${
          isDone ? 'line-through' : 'no-underline'
        }`}
      >
        {text}
      </label>

      {/* custom checkbox */}
      <svg
        className='absolute w-5 h-5 left-[20px] first-line:hidden peer-checked:block  peer-checked:bg-primary-700 rounded-[4px]'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='white'
        strokeWidth='4'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <polyline points='20 6 9 17 4 12'></polyline>
      </svg>

      <button
        className='w-12 h-full flex items-center justify-center text-lg font-bold text-primary-400 hover:text-primary-900'
        onClick={() => removeTodo(id)}
      >
        <FaXmark />
      </button>
    </div>
  );
};
export default TodoItem;
