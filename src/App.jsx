export default function App() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="section hero-section">
        <div className="container hero-content">
          <div className="row align-items-center justify-content-center justify-content-md-between w-100">
            <div className="col-md-7 col-lg-6 mb-4 mb-md-0 hero-text">
              <div className="glass mb-3 p-3">
                <h1 className="m-0">Hi there, I'm</h1>
              </div>

              <div className="glass mb-3 p-3">
                <h1 className="accent m-0">Hamza Nasir.</h1>
              </div>

              <div className="glass mt-4 p-3 d-inline-block">
                <div className="social-links">
                  <a href="https://github.com" target="_blank">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href="https://x.com" target="_blank">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="https://linkedin.com" target="_blank">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-5 col-lg-4 d-flex justify-content-center">
              <img
                src="https://placehold.co/400"
                alt="Profile"
                className="profile-img"
              />
            </div>
          </div>
        </div>

        {/* Scroll button */}
        <div
          className="scroll-indicator"
          onClick={() => document.getElementById("about").scrollIntoView()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            style={{ width: "3rem", height: "3rem" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5l7.5 7.5 7.5-7.5"
            />
          </svg>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="section" id="about">
        <div className="container about-section">
          <div className="row align-items-center justify-content-center gx-5">
            <div className="col-lg-7 mb-4 mb-lg-0">
              <div className="about-text glass p-4">
                <h2 className="accent">About</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                  quibusdam facilis dolores rerum nihil iste praesentium beatae.
                </p>
              </div>
            </div>

            <div className="col-lg-auto d-flex justify-content-center">
              <div className="tech-icons">
                <div className="tech-row">
                  <div className="tech-icon">
                    <i className="fa-brands fa-python"></i>
                  </div>
                  <div className="tech-icon">
                    <i className="fa-solid fa-flask"></i>
                  </div>
                  <div className="tech-icon">
                    <i className="fa-brands fa-java"></i>
                  </div>
                </div>

                <div className="tech-row">
                  <div className="tech-icon">
                    <i className="fa-brands fa-html5"></i>
                  </div>
                  <div className="tech-icon">
                    <i className="fa-brands fa-css3"></i>
                  </div>
                  <div className="tech-icon">
                    <i className="fa-brands fa-js"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT SECTION */}
      <section className="section project-section">
        <div className="container project-container d-flex align-items-center justify-content-end">
          <img
            src="https://placehold.co/800x500"
            alt="project 1"
            className="project-screenshot left"
          />

          <div className="col-md-5 d-none d-md-block"></div>

          <a
            href="https://github.com"
            target="_blank"
            className="text-decoration-none text-white col-12 col-md-7 col-lg-5"
          >
            <div className="project-card">
              <h3 className="accent">Project One</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                impedit dolor, ipsa quaerat maiores doloribus!
              </p>

              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">Node.js</span>
                <span className="tag">MongoDB</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <section className="section" style={{ minHeight: "auto" }}>
        <footer className="container-fluid">
          <p className="mb-1">
            © {new Date().getFullYear()} Hamza Nasir
          </p>
          <div>
            <a href="https://github.com" className="me-3">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://linkedin.com" className="me-3">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://x.com">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </footer>
      </section>
    </>
  );
}
