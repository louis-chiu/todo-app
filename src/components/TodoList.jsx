import TodoItem from './TodoItem';

const TodoList = () => {
  return (
    <section className='h-2/4 my-4 pl-8 pr-[calc(2rem-10px)] overflow-y-scroll'>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </section>
  );
};
export default TodoList;
