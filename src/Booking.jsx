import Footer from './components/Footer';
import Header from './components/Header';
import { HeroContent } from './components/Hero';
import './static/Booking.css';
import './static/Button.css';

export default function Booking() {
  return (
    <>
      <Header />
      {HeroContent(
        'Reservations',
        'Booking',
        'Pick a date and time for your dining experience, and let us know how many people will be joining you.',
      )}
      <section className="booking">
        <div>Select your table</div>
        <form>
          <div className="booking-form">
            <div className="booking-form-item">
              <label htmlFor="date">Date</label>
              <input type="date" name="date" id="date" />
            </div>
            <div className="booking-form-item">
              <label htmlFor="time">Time</label>
              <input type="time" name="time" id="time" />
            </div>
            <div className="booking-form-item">
              <label htmlFor="guests">Guests</label>
              <input
                type="number"
                name="guests"
                id="guests"
                min="1"
                max="10"
                defaultValue="1"
              />
            </div>
          </div>
          <div className="booking-form-item">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="booking-form-item">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="booking-form-item">
            <label htmlFor="phone">Phone</label>
            <input type="tel" name="phone" id="phone" />
          </div>
          <div className="booking-form-item">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="5"></textarea>
          </div>
          <button type="submit" className="yellow-button">
            Reserve
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
}
