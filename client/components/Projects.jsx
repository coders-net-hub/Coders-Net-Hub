import React from 'react';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      things: false
    }
  }

  render() {
    return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">CodersNetHub</a>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Projects <span className="sr-only">(current)</span> </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Profile</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

        <ul className="nav nav-pills nav-fill" id="navi" >
          <li className="nav-item">
            <a className="nav-link active" href="#">Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Much longer nav link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>

        <div className="card  mx-auto" id="card0" >
          <div className="row no-gutters">
            <div className="col">
              <img src="https://sdtimes.com/wp-content/uploads/2015/07/iot.png" className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Creating Iot Application on Blockchain</h5>
                <p className="card-text">You get to Work With the latest Iot technolgies and deploy them into the blockchain</p>
                <p className="card-text"><small className="text-muted">Project sponserd by IBM</small></p>
              </div>
            </div>
          </div>
        </div>

        <div className="card  mx-auto" id="card1">
          <div className="row no-gutters">
            <div >
              <img src="https://pbs.twimg.com/profile_images/1114309924551417856/FKA4cm2x_400x400.png" className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Creating Iot Application on Blockchain</h5>
                <p className="card-text">You get to Work With the latest Iot technolgies and deploy them into the blockchain</p>
                <p className="card-text"><small className="text-muted">Project sponserd by IBM</small></p>
              </div>
            </div>
          </div>
        </div>

        <div className="card  mx-auto" id="card1">
          <div className="row no-gutters">
            <div className="col">
              <img src="https://cloud.google.com/images/home/home-campaign-anthos.jpg" className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Creating Iot Application on Blockchain</h5>
                <p className="card-text">You get to Work With the latest Iot technolgies and deploy them into the blockchain</p>
                <p className="card-text"><small className="text-muted">Project sponserd by IBM</small></p>
              </div>
            </div>
          </div>
        </div>

        <div className="card  mx-auto" id="card1">
          <div className="row no-gutters">
            <div className="col">
              <img src="https://intelligence.org/wp-content/uploads/2015/12/open-ai1.png" className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Creating Iot Application on Blockchain</h5>
                <p className="card-text">You get to Work With the latest Iot technolgies and deploy them into the blockchain</p>
                <p className="card-text"><small className="text-muted">Project sponserd by IBM</small></p>
              </div>
            </div>
          </div>
        </div>

        <div className="card  mx-auto" id="card1">
          <div className="row no-gutters">
            <div className="col">
              <img src="https://sdtimes.com/wp-content/uploads/2015/07/iot.png" className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Creating Iot Application on Blockchain</h5>
                <p className="card-text">You get to Work With the latest Iot technolgies and deploy them into the blockchain</p>
                <p className="card-text"><small className="text-muted">Project sponserd by IBM</small></p>
              </div>
            </div>
          </div>
        </div>

        <div className="card  mx-auto" id="card1">
          <div className="row no-gutters">
            <div className="col">
              <img src="https://sdtimes.com/wp-content/uploads/2015/07/iot.png" className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Creating Iot Application on Blockchain</h5>
                <p className="card-text">You get to Work With the latest Iot technolgies and deploy them into the blockchain</p>
                <p className="card-text"><small className="text-muted">Project sponserd by IBM</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;