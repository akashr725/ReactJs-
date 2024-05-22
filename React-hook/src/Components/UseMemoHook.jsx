import { useMemo, useState } from "react";

const UsememoHook = () => {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  //using useMemo hook
  const squredNum = useMemo(() => {
    return squreNum(number);
  }, [number]);

  //without use memo
  // const squredNum=squreNum(number);

  const onChangehaldler = (e) => {
    setNumber(e.target.value);
  };

  const counterhandel = () => {
    setCounter(counter + 1);
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "50%",
          width: "50%",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <h1>Welcome to Usememo Hook Practiece</h1>
        <input
          type="text"
          placeholder="Enter text here"
          value={number}
          onChange={onChangehaldler}
        />
        <div>Output: {squredNum}</div>
        <button onClick={counterhandel}>Click++</button>
        <div>Counter: {counter}</div>
      </div>
    </div>
  );
};
export default UsememoHook;

function squreNum(number) {
  console.log("Square has been willing");

  return Math.pow(number, 2);
}
