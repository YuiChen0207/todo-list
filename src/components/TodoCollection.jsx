import TodoItem from './TodoItem';

<<<<<<< HEAD
const TodoCollection = ({
  todos,
  onSave,
  onDelete,
  onToggleDone,
  onChangeMode,
}) => {
  return (
    <div>
      TodoCollection
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onSave={({ id, title }) => onSave?.({ id, title })}
            onToggleDone={(id) => onToggleDone?.(id)}
            onChangeMode={({ id, isEdit }) => {
              onChangeMode?.({ id, isEdit });
            }}
            onDelete={(id) => onDelete?.(id)}
          />
        );
      })}
=======
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
>>>>>>> 8700042235de5fd5803b7250e53ad1b7232cf8c0
    </div>
  );
};

export default TodoCollection;
