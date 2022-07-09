import React, { useState } from "react";
import Main from "./components/Main/Main";

function App() {
  const [showBack, setShowBack] = useState(false);
  const [showTrash, setShowTrash] = useState(false);
  return (
    <div className="App">
      <Main
        showBack={showBack}
        setShowBack={setShowBack}
        showTrash={showTrash}
        setShowTrash={setShowTrash}
      />
    </div>
  );
}

export default App;
