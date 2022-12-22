import "./App.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import LinkContainer from "./LinkContainer";
import Resume from "./photos/resume.png";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <div className="bg-body text-secondary px-4 py-5 text-center">
          <div className="py-5">
            <h1 className="display-5 fw-bold text-white">
              Welcome to my portfolio
            </h1>
            <div className="col-lg-6 mx-auto">
              <p className="fs-5 mb-4">
                Software Engineering professional with experience in
                object-oriented programming, developing, testing, debugging, and
                UI design. Proven ability to quickly learn and incorporate new
                technologies in the data stack. Previous experience in data
                acquisition and analytics through Psychological perspective.
              </p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <a
                  href="https://www.springboard.com/courses/software-engineering-career-track/?utm_source=google&utm_medium=cpc&utm_campaign=118160325832&utm_content=593537644032&utm_term=springboard%20software%20engineer&hsa_acc=9510960008&hsa_cam=12310804308&hsa_grp=118160325832&hsa_ad=593537644032&hsa_src=g&hsa_tgt=kwd-853613075663&hsa_kw=springboard%20software%20engineer&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQiA-oqdBhDfARIsAO0TrGH0-i5JnVNRH4RPIqD3z3TXKhOpphGYmM-WQqixw2Os3jIhDBG05scaAtnfEALw_wcB"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold mr-2"
                >
                  Coursework
                </a>

                <a
                  className="btn btn-outline-light btn-lg px-4 ml-2"
                  href={Resume}
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
        <LinkContainer />
      </header>
      <Footer />
    </div>
  );
}

export default App;
