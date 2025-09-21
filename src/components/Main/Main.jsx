import { Link } from "react-router-dom";
import "./Main.css";

function Main() {
  return (
    <main className="main">
      <div>
        <h1 className="main__greeting">Hello There,</h1>
        <h2 className="main__name">I am SamSam</h2>
        <p className="main__intro">A Full-Stack Software Engineer ..</p>
        <div className="main__links">
          <Link to="/about" className="main__link"></Link>
          <Link to="/projects" className="main__link"></Link>
        </div>
      </div>
    </main>
  );
}

export default Main;
