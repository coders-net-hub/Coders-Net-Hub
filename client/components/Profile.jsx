import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeHolder: false
    }
  }

  render() {
    return (
      <div>
            <div className="container" >
        <div className="row">
            <div className="col-sm-4">
                <h2 id="textal">About Me</h2>
                <h5 id="textal">Alex Underwood</h5>
                <div className="imageheight">
                    <img src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png" className="img-fluid" />
                </div>
                <p> Like going to new places and work on interesting projects </p>
                <h3>Location: California</h3>
                <p>Places to find me</p>
                <ul className="nav  navbar-light flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">GitHub</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Linkedin</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Hackerrank</a>
                    </li>
                    
                </ul>
            </div>

            <div className="col-sm-8">
                <h3> Projects </h3>
                <div className="card-group">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Property for rent listings</h5>
                            <p className="card-text">Scaled the architecture of a full-stack application’s back-end using several technologies.
.</p>
                            <p className="card-text"><small className="text-muted">Last updated 1 year ago</small></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Exuberant Productions</h5>
                            <p className="card-text">Generated and seeded 10 million sets of data into a mongoDB database and optimized to improve query times from an
                            average of 6 seconds per query to less than 22 milliseconds, a 27,000% speed increase.</p>
                            <p className="card-text"><small className="text-muted">Last updated 2 weeks ago</small></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">UviTraverse</h5>
                            <p className="card-text">Managed the investments, made calculated decisions after deep research to which investments to make..</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 months ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </div>
    );
  }
}

export default Profile;