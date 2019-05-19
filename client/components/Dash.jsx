import React from 'react';

class Dash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeHolder: false
    }
  }

  render() {
    return (
      <div>
        <div className="dashboard">
          <h2>Dashboard</h2>

        </div>

        <div className="container" id="main-container">
          <div className="row">
            <div className="col-sm-4">
              <h6 className="project-name" >Using image recognition to detect text  </h6>
              
              <div className="ProjectCards" >
              <div className="imageheight">
                <img src="https://downloads.healthcatalyst.com/wp-content/uploads/2017/04/machine-learning-in-healthcare.jpg" className="img-fluid" />
                </div>
                <button type="button" className="btn btn-dark">
                  Notifications <span className="badge badge-light">0</span>
                </button>
              </div>
            <div className="textF">
              <div className="badge badge-dark text-wrap" id="remaining-time">
                Remaining Days: 14
              </div>
              <div className="badge badge-dark text-wrap" id="project-length" >
                2 Week project
              </div>
            </div>
              <h6 className="project-name">UIkit third party Library</h6>

              <div className="ProjectCards">
                                <div className="imageheight">
                                  <img src="https://koenig-media.raywenderlich.com/uploads/2017/10/MaterialDesigniOS-feature.png"
                                    className="img-fluid" />
                                </div>
                          <button type="button" className="btn btn-dark">
                            Notifications <span className="badge badge-light">9</span>
                          </button>
              </div>
              <div className="textF">
              <div className="badge badge-dark text-wrap" id="remaining-time" >
                Remaining Days: 2
              </div>
              <div className="badge badge-dark text-wrap" id="project-length">
                1 Week project
              </div>
                      

            </div>

              
            </div>
            <div className="col-sm-4">
              <h6 className="project-name" >Google Cloud based application</h6>
              <div className="ProjectCards">
                <div className="imageheight">
                  <img src="https://analyticsindiamag.com/wp-content/uploads/2018/04/Google-Cloud.png" className="img-fluid" />
                </div>
                <button type="button" className="btn btn-dark">
                  Notifications <span className="badge badge-light">4</span>
                </button>
              </div>
              <div className="textF">
                <div className="badge badge-dark text-wrap" id="remaining-time" >
                  Remaining Days: 20
                </div>
                <div className="badge badge-dark text-wrap" id="project-length" >
                  4 Week project
                </div>
              
              
              </div>

              <div className="Addmore">
                <button type="button" className="btn btn-dark btn-block">Add a new project</button>
              </div>
              


            </div>
            <div className="col-sm-4">
              <h6 className="project-name">React-Native photo App</h6>
              <div className="ProjectCards">
                        <div className="imageheight">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGLoeF8Z9r2BlGXvopGzOdGsWYTm5XhPdYgVq9N_S9ilUYvCgu" className="img-fluid" />
                        </div>
                  <button type="button" className="btn btn-dark">
                    Notifications <span className="badge badge-light">1</span>
                  </button>
              </div>
              <div className="textF">
                <div className="badge badge-dark text-wrap" id="remaining-time" >
                  Remaining Days: 14
                </div>
                <div className="badge badge-dark text-wrap" id="project-length" >
                  2 Week project
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dash;