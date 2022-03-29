import React from "react";
import "./App.css";
import FormsContainer from './components/FormsContainer';
import SwitchFormsContainer from "./components/SwitchFormsContainer";

const App = () => {
  return (
    <div className="container">
    <FormsContainer/>
    <SwitchFormsContainer/>
    </div>
  );
};

export default App;
