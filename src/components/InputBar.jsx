import { AiOutlinePlus } from 'react-icons/ai';

const InputBar = () => {
  return (
    <form className='w-full h-12 px-8 mt-24'>
      <label
        htmlFor='todo'
        className=' text-sm hover:cursor-pointer'
      >
        Add to list
      </label>
      <div className='flex justify-between'>
        <input
          type='text'
          name='todo'
          id='todo'
          className='h-10 w-[calc(100%-3.25rem)] text-md rounded-sm pl-2 focus:outline-primary-800'
        />
        <button
          type='submit'
          className='h-10 w-12 bg-primary-700 flex items-center justify-center rounded-sm text-primary-100 text-2xl hover:bg-primary-700/90'
        >
          <AiOutlinePlus />
        </button>
      </div>
    </form>
  );
};
export default InputBar;
