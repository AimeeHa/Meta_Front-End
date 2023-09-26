import hero from '../assets/hero.jpg';

export default function Hero() {
  return (
    <section className="hero">
      <section className="hero-container">
        <section className="hero-text">
          <h1 className="hero-title">Little Lemon</h1>
          <h2 className="hero-subtitle">Chicago</h2>
          <p className="hero-content">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a mordern twist.
          </p>
          <button className="yellow-button">Reserve a Table</button>
        </section>

        <img src={hero} alt="hero" className="hero-image" />
      </section>
    </section>
  );
}
