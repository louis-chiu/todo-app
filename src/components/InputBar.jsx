import { AiOutlinePlus } from 'react-icons/ai';
import { useGlobalContext } from './context';
import { nanoid } from 'nanoid';
const InputBar = () => {
  const { addTodo } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const text = formData.get('todo');
    addTodo({
      id: nanoid(),
      text,
      isDone: false,
    });
  };
  return (
    <form
      className='w-full h-12 px-8 mt-24'
      onSubmit={handleSubmit}
    >
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
          required
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
