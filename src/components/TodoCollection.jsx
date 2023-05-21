import TodoItem from './TodoItem';

const TodoCollection = ({ todos, onSave, onDelete, onChangeMode }) => {
  return (
    <div>
      TodoCollection
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          onSave={({ id, title }) => onSave?.({ id, title })}
          onChangeMode={({ id, isEdit }) => onChangeMode?.({ id, isEdit })}
          onDelete={({ id }) => onDelete?.({ id })}
          {...todo}
        />
      ))}
    </div>
  );
};

export default TodoCollection;
