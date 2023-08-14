import TodoItem from './TodoItem';
import { useGlobalContext } from './context';

const TodoList = () => {
  const { todoList } = useGlobalContext();
  return (
    <section className='h-2/4 my-4 pl-8 pr-[calc(2rem-10px)] overflow-y-scroll'>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
        />
      ))}
    </section>
  );
};
export default TodoList;
