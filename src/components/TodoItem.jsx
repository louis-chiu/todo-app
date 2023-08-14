import { FaXmark } from 'react-icons/fa6';
const TodoItem = () => {
  return (
    <div className='relative w-full h-12 flex items-center bg-primary-100 rounded-md before:block before:w-1 before:h-full before:rounded-s-md before:bg-primary-800'>
      <input
        type='checkbox'
        name='todo'
        id='todo1'
        className='peer 
          relative 
          appearance-none 
          shrink-0 
          mx-4
          w-5 
          h-5 
          cursor-pointer
          rounded-[4px]
          border-[1px]
          border-primary-400 
          bg-white
          focus:outline-none 
          checked:bg-primary-700 
          checked:border-0
          disabled:border-primary-400 
          disabled:bg-primary-400'
      />

      <label
        htmlFor='todo1'
        className='w-[calc(100%-2rem-1.25rem-3rem)] hover:cursor-pointer select-none'
      >
        Lebel
      </label>

      {/* custom check */}
      <svg
        className='absolute w-4 h-4 left-[22px] first-line:hidden peer-checked:block'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='white'
        stroke-width='4'
        stroke-linecap='round'
        stroke-linejoin='round'
      >
        <polyline points='20 6 9 17 4 12'></polyline>
      </svg>

      <button className='w-12 h-full flex items-center justify-center text-lg font-bold text-primary-400 hover:text-primary-900'>
        <FaXmark />
      </button>
    </div>
  );
};
export default TodoItem;
