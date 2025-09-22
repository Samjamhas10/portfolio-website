import "./Home.css";

function Home({ onViewMyWork, onGetInContact }) {
  return (
    <main className="home">
      <header>
        <h1 className="home__name">Hi, I'm SamSam</h1>
        <p className="home__description">
          A passionate detail-oriented Full-stack developer with a passion for
          helping others.
        </p>
        <div className="home__buttons">
          <button className="home__button" onClick={onViewMyWork}>
            View My Work
          </button>
          <button className="home__button" onClick={onGetInContact}>
            Get In Contact
          </button>
        </div>
      </header>
    </main>
  );
}

export default Home;
