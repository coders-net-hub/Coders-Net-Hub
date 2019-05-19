import React from 'react';
import Dash from './Dash.jsx'
import Projects from './Projects.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stuff: false
    }
  }

  render() {
    return (
      <div>
        <Dash />
        <Projects />
      </div>
    );
  }
}

export default App;