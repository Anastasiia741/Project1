import './App.css';
import ParentComponent from "./Lottery";
import React from "react";

class App extends React.Component {
  render() {
    return (
        <div>
          <ParentComponent />
        </div>
    )
  }
}
export default App;