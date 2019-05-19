import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeHolder: false
    }
    this.dashSwitch = this.dashSwitch.bind(this);
    this.projectsSwitch = this.projectsSwitch.bind(this);
    this.profileSwitch = this.profileSwitch.bind(this);
  }

  dashSwitch(event) {
    this.props.optionSelected("Dash")
  }

  projectsSwitch(event) {
    this.props.optionSelected("Projects")
  }

  profileSwitch(event) {
    this.props.optionSelected("Profile")
  }

  render() {
    // const { optionSelected } = this.props;
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">CodersNetHub</a>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active" id="Home" onClick={this.dashSwitch}>
                <a className="nav-link" href="#" id="Home">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item" id="Projects" onClick={this.projectsSwitch}>
                <a className="nav-link" href="#">Projects</a>
              </li>
              <li className="nav-item" id="Profile" onClick={this.profileSwitch}>
                <a className="nav-link" href="#">Profile</a>
              </li>
              <li className="nav-item " id="Groups" onClick={this.dashSwitch}>
                <a className="nav-link" href="#">Groups <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item " id="Chats" onClick={this.dashSwitch}>
                <a className="nav-link" href="#">Chats <span className="sr-only">(current)</span></a>
              </li>

            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;