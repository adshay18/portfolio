import thumbnail from './photos/1636032030153.jpeg';

const NavBar = () => {

    return (
        <header className="sticky-top">
        <div className="collapse bg-dark" id="navbarHeader">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="card bg-dark border-0 col-6 col-lg-4 py-4" style={{width: 18 + 'rem'}}>
                        <img src={thumbnail} className="card-img-top" alt="Andrew" />
                    </div>
                    <div className="col-6 col-lg-4 py-5">
                        <h4 className="text-white">Contact</h4>
                        <ul className="list-unstyled">
                            <li><a target="_blank" rel="noreferrer" className="text-white" href = "mailto:1996ashay@gmail.com">
                                Send an Email <i className="fa-solid fa-paper-plane"></i>
                                </a>
                            </li>
                            <li><a href="https://www.linkedin.com/in/andrewdshay/" target="_blank" rel="noreferrer" className="text-white">LinkedIn <i className="fa-brands fa-linkedin"></i></a></li>
                            <li><a href="https://github.com/adshay18" target="_blank" rel="noreferrer" className="text-white">GitHub <i className="fa-brands fa-github"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="card col-6 py-4 col-lg-4 bg-dark border-0" style={{width: 18 + 'rem'}}>
                            <div className="card-body">
                                <p className="card-text text-light">I am a Software Engineer based out of the Detroit Metropolitan area. My skills include:</p>
                            </div>
                        </div>
                        <div className="card col-6 col-lg-4 bg-dark border-0 py-4">
                            <div className="card-body justify-content-center">
                                <p className="card-text text-light">
                                    HTML, CSS, , JavaScript, git, jQuery, DOM, Python, Flask, Node, Express, SQL, AJAX, GitHub, Terminal, VBA, Excel</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="navbar navbar-dark bg-dark box-shadow">
            <div className="container d-flex justify-content-between">
                <a href="/" className="navbar-brand d-flex align-items-center">
                    <strong><i className="fa-solid fa-terminal"></i> <i className="fa-solid fa-laptop-code"></i> Andrew Shay</strong>
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