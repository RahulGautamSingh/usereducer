import "./styles.css";
import counterContext from "../Counter";

import { useContext } from "react";
export default function NavBar(props) {
  let contextData = useContext(counterContext);
  return (
      <div className="navbar">
        <h1>NavBar</h1>
          <h1>{contextData.counterState.counterValue}</h1>
      </div>
  )
}
