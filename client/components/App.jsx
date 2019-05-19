import React from 'react';
import Dash from './Dash.jsx'
import Projects from './Projects.jsx';
import NavBar from './NavBar.jsx';
import Profile from './Profile.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeHolder: false,
      pageSelection: "Dash"
    }
    this.selections = this.selections.bind(this);
  }

  selections(name) {
    console.log(name);
    this.setState({
      pageSelection: name
    })
  }
  

  render() {
    const { pageSelection } = this.state;
    return (
      <div>
        <NavBar optionSelected={this.selections} />
        {
        pageSelection === "Dash" ? 
          <Dash />
          : null
        }
                {
        pageSelection === "Projects" ? 
          <Projects />
          : null
        }
        {
        pageSelection === "Profile" ? 
          <Profile />
          : null
        }
      </div>
    );
  }
}

export default App;