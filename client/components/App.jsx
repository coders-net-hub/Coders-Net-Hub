import React from 'react';

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
        <h1>Testing</h1>
      </div>
    );
  }
}

export default App;