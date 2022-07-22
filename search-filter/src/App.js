import { useId, useState } from "react";
import { list } from "./const";
import "./App.css";

function App() {
  const id = useId();
  const [input, setInput] = useState(""); // '' is the initial state value

  const [filterList, setFilterList] = useState(list);
  const handleSearch = (e) => {
    if (e.target.value === "") {
      setFilterList(list);
      return;
    }
    const filterNames = list.filter((names) => {
      console.log(names);
      return names.toLowerCase().includes(e.target.value);
    });
    setFilterList(filterNames);
  };

  console.log(input);

  return (
    <div className="app">
      <div className="search">
        <label>Search:</label>
        <input
          id={id}
          value={input}
          onInput={(e) => setInput(e.target.value)}
          onChange={handleSearch}
        />
      </div>
      <div className="list">
        {filterList.map((names) => (
          <p>{names}</p>
        ))}
      </div>
    </div>
  );
}
export default App;
