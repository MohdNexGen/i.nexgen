import "./App.css";

function App() {
  return (
    <div className="hero">

      <nav className="navbar">
        <h1 className="logo">NexGen Technology</h1>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Courses</a>
          <a href="#">Contact</a>
        </div>
      </nav>


      <div className="hero-content">

        <h1 className="title">
          Learn Coding.
          Build Projects.
          Get International Opportunities.
        </h1>


        <p className="description">

          NexGen teaches practical skills:

          HTML • CSS • JavaScript ES6 • React • Node.js • Express • Git • GitHub

        </p>


        <h2>
          Students build real websites and portfolios
          for international companies and technology careers.
        </h2>


        <div className="courses">

          <h3>Courses</h3>

          <ul>

            <li>Frontend Development</li>

            <li>Backend Development</li>

            <li>React Projects</li>

            <li>Node + Express</li>

            <li>Git & GitHub</li>

            <li>Portfolio Building</li>

          </ul>

        </div>


        <button
          className="btn"
          onClick={() =>
            window.location =
              "mailto:i.nexgen@gmail.com"
          }
        >

          Apply Now

        </button>


      </div>

    </div>
  );
}

export default App;