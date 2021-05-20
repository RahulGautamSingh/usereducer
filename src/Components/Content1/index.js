import "./styles.css";
import counterContext from "../Counter";

import { useContext } from "react";

export default function Content1(props) {
  let contextData = useContext(counterContext);
  return (
    <div className="content-container">
      <div className="counter-holder">
        <button onClick={() => contextData.dispatch("increment")}>+</button>
        <div>{contextData.counterState.counterValue}</div>
        <button onClick={() => contextData.dispatch("decrement")}>-</button>
      </div>
      <div className="reset">
        <button onClick={() => contextData.dispatch("reset")}>Reset</button>
      </div>
    </div>
  );
}
