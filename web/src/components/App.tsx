import React, { useState } from "react";
import "./App.css";
import { useNuiEvent } from "../hooks/useNuiEvent";
import { debugData } from "../utils/debugData";
// import { fetchNui } from "../utils/fetchNui";
import { useExitListener } from "../hooks/useExitListener";

// This will set the NUI to visible if we are
// developing in browser
debugData([
  {
    action: "setVisible",
    data: true,
  },
]);

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useNuiEvent<boolean>("setVisible", (data) => {
    // This is our handler for the setVisible action.
    console.log(data);
    setIsVisible(data);
  });

  useExitListener(setIsVisible);

  return (
    <div className="nui-wrapper">
      <div
        className="popup-thing"
        style={{ visibility: isVisible ? "visible" : "hidden" }}
      >
        <div>
          <h1>React Window Boilerplate</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
