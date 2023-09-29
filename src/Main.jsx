import { createContext, useState, useReducer } from 'react';
import fetchAPI from './APIs/fetchAPI';
import submitAPI from './APIs/submitAPI';

export const BookingContext = createContext({
  isFetching: false,
  availableTimes: [],
  selectedSlots: [],
  updateTimes: () => {},
  initializeTimes: () => {},
  submitForm: () => {},
});

export function Main(props) {
  const [isFetching, setIsFetching] = useState(false);

  function availableTimesReducer(state, action) {
    const selectedSlots = state.selectedSlots ?? [];

    // helper function to export updated avaliable times
    function exportResults(currentDate, allSlots, selectedSlots) {
      const availableTimes = allSlots.filter((slot) => {
        return !selectedSlots.some((selected) => {
          return selected.date === currentDate && selected.time === slot;
        });
      });

      return {
        currentDate,
        allSlots,
        selectedSlots,
        availableTimes,
      };
    }

    switch (action.type) {
      case 'REMOVE_SELECTED_TIME':
        // payload should include date and time {date: , time: }
        const selectedTime = action.payload;
        const newSelectedSlots = [...selectedSlots, selectedTime];
        return exportResults(
          state.currentDate,
          state.allSlots,
          newSelectedSlots,
        );

      case 'INITIALIZE':
        const currentDate = action.payload.date;
        return exportResults(currentDate, action.payload.times, selectedSlots);

      default:
        return state;
    }
  }

  // Initialize the state using useReducer
  const [{ availableTimes, selectedSlots }, dispatch] = useReducer(
    availableTimesReducer,
    {
      allSlots: [],
      selectedSlots: [],
      availableTimes: [],
    },
  );
  console.log('selectedSlots', selectedSlots);

  function updateTimes(selectedDate, selectedTime) {
    dispatch({
      type: 'REMOVE_SELECTED_TIME',
      payload: { date: selectedDate, time: selectedTime },
    });
  }

  function initializeTimes(selectedDate) {
    setIsFetching(true);
    fetchAPI
      .fetchAvailableTimes(selectedDate)
      .then((response) => {
        dispatch({
          type: 'INITIALIZE',
          payload: { date: selectedDate, times: response.availableTimes },
        });
      })
      .catch((error) => {
        console.error('Error initializing available times:', error);
      });
  }

  function submitBooking(formData, onFinish) {
    try {
      submitAPI.submit(formData).then(onFinish);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <BookingContext.Provider
        value={{
          isFetching,
          availableTimes,
          updateTimes,
          initializeTimes,
          submitForm: submitBooking,
        }}
      >
        {props.children}
      </BookingContext.Provider>
    </>
  );
}
