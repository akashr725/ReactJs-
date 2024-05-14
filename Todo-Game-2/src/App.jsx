import TodoGame from "./Components/TodoGame";
import TodoAppName from "./Components/TotoAppName";
import TodoItems from "./Components/TodoItems";

function App() {
  const items = [
    {
      name: "Buy milk",
      todoDate: "15/02/2024",
    },
    {
      name: "Go to College",
      todoDate: "15/02/2024",
    },
  ];

  return (
    <center className="cntr-container">
      <TodoAppName />
      <TodoGame />
      <TodoItems items={items}></TodoItems>
    </center>
  );
}
export default App;
