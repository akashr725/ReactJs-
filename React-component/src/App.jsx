import TodoGame from "./Components/TodoGame";
import TodoInput1 from "./Components/TodoInput1";
import TodoInput2 from "./Components/TodoInput2";
import TodoAppName from "./Components/TotoAppName";

function App() {
  return (
    <center className="cntr-container">
      <TodoAppName />
      <TodoGame />
      <TodoInput1 />
      <TodoInput2 />
    </center>
  );
}
export default App;
