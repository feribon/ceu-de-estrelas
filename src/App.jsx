import { useState } from "react";
import "./App.css";
import React from "react";

function App() {
  const [list, setList] = useState([]);
  const [refaz, setRefaz] = useState([]);

  const handleClick = (ev) => {
    const newPoint = {
      positionX: ev.clientX,
      positionY: ev.clientY,
    };
    setList((prev) => [...prev, newPoint]);
    setRefaz([]);
  };

  const desfazer = (ev) => {
    ev.stopPropagation();

    if (list.length === 0) {
      return;
    }

    const lastItem = list[list.length - 1];
    setRefaz((prev) => [...prev, lastItem]);

    setList((prev) => {
      const newArr = [...prev].slice(0, -1);
      return newArr;
    });
  };

  const refazer = (ev) => {
    ev.stopPropagation();

    if (refaz.length === 0) {
      return;
    }
    const voltar = refaz[refaz.length - 1];
    setRefaz((prev) => {
      const newArr = [...prev].slice(0, -1);
      return newArr;
    });

    setList((prev) => [...prev, voltar]);
  };

  return (
    <div id="page" onClick={handleClick}>
      <button onClick={desfazer}>Desfazer</button>
      <button onClick={refazer}>Refazer</button>
      {list.map((item, index) => (
        <span
          key={index}
          className="star"
          style={{ left: item.positionX, top: item.positionY }}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
}

export default App;
