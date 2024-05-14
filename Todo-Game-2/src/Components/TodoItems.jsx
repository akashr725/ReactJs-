import TodoInput from "./TodoInput";

const TodoItems = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        <TodoInput milk={item.name} date={item.todoDate}></TodoInput>;
      })}
    </div>
  );
};
export default TodoItems;
