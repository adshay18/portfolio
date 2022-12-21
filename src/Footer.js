import logo from "./logo.svg";
const Footer = () => {
  return (
    <footer className="text-muted">
      <div className="container">
        <p className="float-right">
          <a className="text-white" href="/">
            Back to top
          </a>
        </p>
        <p>
          All work is &copy; Andrew Shay, please reach out to inquire about a
          custom website.
          <br></br>
          <a
            target="_blank"
            rel="noreferrer"
            className="text-muted"
            href="mailto:1996ashay@gmail.com"
          >
            <i className="fa-solid fa-paper-plane"></i>
          </a>{" "}
          <a
            className="text-muted"
            href="https://www.linkedin.com/in/andrewdshay/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>{" "}
          <a
            href="https://github.com/adshay18"
            target="_blank"
            rel="noreferrer"
            className="text-muted"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </p>
        <p>
          Built in React
          <img src={logo} className="App-logo" alt="logo" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
