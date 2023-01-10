import { useState } from "react";
import Alert from "archis-react-alert";
import "/node_modules/archis-react-alert/dist/style.css";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);
  const [type, setType] = useState("");

  return (
    <div className="App">
      <Alert
        show={show}
        setShow={setShow}
        time={2000}
        type={type}
        text={capitalizeFirstLetter(type) + "!"}
      />
      <h1>React Alert Component</h1>
      <label htmlFor="alert">Select Alert Type </label>
      <select
        onChange={(e) => {
          if (!show) setType(e.target.value);
        }}
        name="alert"
        id="alert"
        value={type}
      >
        <option value="error">Error</option>
        <option value="warning">Warning</option>
        <option value="info">Info</option>
        <option value="success">Success</option>
      </select>
      <div className="card">
        <button
          onClick={() => {
            if (!show) setShow(true);
          }}
        >
          Throw Alert!
        </button>
      </div>
    </div>
  );

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}

export default App;
