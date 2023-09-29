import Footer from './components/Footer';
import Header from './components/Header';
import { HeroContent } from './components/Hero';
import './static/Booking.css';
import './static/Button.css';
import BookingForm from './components/BookingForm';

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
        <BookingForm />
      </section>
      <Footer />
    </>
  );
}
