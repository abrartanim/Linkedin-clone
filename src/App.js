import React from "react";
//import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      <div className="app__body">
        <Sidebar />
        {/* feed */}
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
