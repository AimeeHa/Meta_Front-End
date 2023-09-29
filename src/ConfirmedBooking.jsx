import Header from './components/Header';
import Footer from './components/Footer';
import { HeroContent } from './components/Hero';
import './static/Booking.css';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

export default function ConfirmedBooking() {
  return (
    <>
      <Header />
      {HeroContent(
        'Reservations',
        'Booked',
        'Relax and get ready for the great date!',
      )}
      <section className="confirmed">
        <div className="confirmed-message">
          <CheckCircleRoundedIcon
            style={{
              width: '100px',
              height: '100px',
              color: 'var(--primary-yellow-color)',
            }}
          />
          <h1>Thank you for your reservation!</h1>
          <p>
            We look forward to welcoming you to Little Lemon. If you have any
            questions, please feel free to contact us at
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
