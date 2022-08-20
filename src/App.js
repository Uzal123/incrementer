import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({
    1: { categoty: "1", product: "A", count: 0 },
    2: { categoty: "1", product: "B", count: 0 },
    3: { categoty: "1", product: "C", count: 0 },
    4: { categoty: "2", product: "X", count: 0 },
    5: { categoty: "2", product: "Y", count: 0 },
    6: { categoty: "2", product: "Z", count: 0 },
  });

  const addItem = (e,key, value) => {
    e.preventDefault()
    let newValue = {...value,count : value.count+1,}
    setData(prev=>({...prev,[key]: newValue}))
  };

  return (
    <div>
      <div>
        {Object.entries(data).map(([k, v]) => (
          <div className="" key={k}>
            {v.product} <span>{v.count}</span>{" "}
            <button onClick={(e) => addItem(e, k, v)}>add</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
