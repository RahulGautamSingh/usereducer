import "./styles.css";
import counterContext from "../Counter";

import { useContext } from "react";
export default function NavBar(props) {
  let contextData = useContext(counterContext);
  return (
      <div className="navbar">
          <button onClick={() => contextData.dispatch("reset")}>Reset</button>
      </div>
  )
}
