import "./App.css";
import Card from "./Components/Card";


function App() {
  return (
    <>
      <h2 className="bg-blue-400 mb-5  p-4 text-black rounded-xl">Tailwind Css</h2>
      <Card username="About Linux"></Card>
      <br></br>
      <Card username="About Windows"></Card>
    </>
  );
}

export default App;
