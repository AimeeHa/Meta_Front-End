import Footer from './components/Footer';
import Header from './components/Header';
import { HeroContent } from './components/Hero';
import './static/Booking.css';
import './static/Button.css';
import { useReducer, useState } from 'react';
import fetchAPI from './APIs/fetchAPI';
import BookingForm from './components/BookingForm';

export default function Booking() {
  const [isFetching, setIsFetching] = useState(false);

  function availableTimesReducer(state, action) {
    switch (action.type) {
      case 'UPDATE_TIMES':
        const newState = Array.isArray(state) ? state : [];
        const newTimes = Array.isArray(action.payload) ? action.payload : [];
        const newAvailableTimes = newTimes.filter(
          (time) => !newState.includes(time),
        );
        return newAvailableTimes;
      default:
        return state;
    }
  }

  // Initialize the state using useReducer
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);

  function updateTimes(newTimes) {
    dispatch({ type: 'UPDATE_TIMES', payload: newTimes });
  }

  function initializeTimes(selectedDate) {
    setIsFetching(true);
    fetchAPI
      .fetchAvailableTimes(selectedDate)
      .then((response) => {
        updateTimes(response.availableTimes);
      })
      .catch((error) => {
        console.error('Error initializing available times:', error);
      });
  }

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
        <BookingForm
          availableTimes={availableTimes}
          updateTimes={updateTimes}
          initializeTimes={initializeTimes}
          isFetching={isFetching}
        />
      </section>
      <Footer />
    </>
  );
}
