import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>This is react class component in proudtales-com-2021 </h2>
        {console.log("browser timezone:",new Intl.DateTimeFormat().resolvedOptions().timeZone)}
      </header>
    </div>
  );
}

export default App;
