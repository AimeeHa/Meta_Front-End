import { useNavigate } from 'react-router-dom';
import hero from '../assets/hero.jpg';

export default function Hero() {
  const navigate = useNavigate();

  return HeroContent(
    'Little Lemon',
    'Chicago',
    'We are a family owned Mediterranean restaurant, focused on traditional recipes served with a mordern twist.',
    <button
      className="yellow-button"
      onClick={(e) => {
        e.preventDefault();
        navigate('/booking');
      }}
    >
      Reserve a Table
    </button>,
  );
}

export function HeroContent(title, subtitle, content, button?) {
  return (
    <section className="hero">
      <section className="hero-container">
        <section className="hero-text">
          <h1 className="hero-title">{title}</h1>
          <h2 className="hero-subtitle">{subtitle}</h2>
          <p className="hero-content">{content}</p>
          {button}
        </section>

        <img src={hero} alt="hero" className="hero-image" />
      </section>
    </section>
  );
}
