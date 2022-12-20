const NavBar = () => {

    return (
        <header>
        <div className="collapse bg-dark" id="navbarHeader">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-7 py-4">
                <div className="card bg-dark" style={{width: 18 + 'rem'}}>
                  <img src="/src/photos/1636032030153.jpeg" className="card-img-top" alt="Andrew" />
                  <div className="card-body">
                    <p className="card-text text-light">I am a Software Engineer based out of the Detroit Metropolitan area. I began my coding journey near the end of October 2021 and took the dive into Springboard's Software Engineering Career Track. My skills include:</p>
                    <table className="text-light">
                        <tbody>
                            <tr>
                                <td>HTML</td>
                                <td>CSS</td>
                                <td>JavaScript</td>
                                <td>git</td>
                            </tr>
                            <tr>
                                <td>jQuery</td>
                                <td>DOM</td>
                                <td>Python</td>
                                <td>Flask</td>
                            </tr>
                            <tr>
                                <td>Node</td>
                                <td>Express</td>
                                <td>SQL</td>
                                <td>AJAX</td>
                            </tr>
                            <tr>
                                <td>GitHub</td>
                                <td>Terminal</td>
                                <td>VBA</td>
                                <td>Excel</td>
                            </tr>
                        </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 offset-md-1 py-4">
                <h4 className="text-white">Contact</h4>
                <ul className="list-unstyled">
                    <li><a target="_blank" rel="noreferrer" className="text-white" href = "mailto:1996ashay@gmail.com">
                        Send an Email
                        </a>
                    </li>
                    <li><a href="https://www.linkedin.com/in/andrewdshay/" target="_blank" rel="noreferrer" className="text-white">LinkedIn</a></li>
                    <li><a href="https://github.com/adshay18" target="_blank" rel="noreferrer" className="text-white">GitHub</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar navbar-dark bg-dark box-shadow">
          <div className="container d-flex justify-content-between">
            <a href="/" className="navbar-brand d-flex align-items-center">
              <strong><i className="fas fa-palette"></i><i className="fas fa-paint-brush"></i>  Andrew Shay</strong>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </header>
    )
}

export default NavBar;