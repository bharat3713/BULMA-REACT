import React from "react";
import NavigationBar from "../Navigation/NavigationBar";



class App extends React.Component {
  render() {
    return (
      <div className="app-container">
       <NavigationBar></NavigationBar>        
        {this.props.children}
      </div>
    );
  }
}

export default App;
