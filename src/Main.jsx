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
    switch (action.type) {
      case 'REMOVE_SELECTED_TIME':
        // payload should include date and time {date: , time: }
        const selectedTime = action.payload;
        const newSelectedSlots = [...selectedSlots, selectedTime];
        return {
          currentDate: state.currentDate,
          allSlots: state.allSlots,
          selectedSlots: newSelectedSlots,
          availableTimes: state.allSlots.filter((slot) => {
            return !newSelectedSlots.some((selected) => {
              return (
                selected.date === state.currentDate && selected.time === slot
              );
            });
          }),
        };

      case 'INITIALIZE':
        const currentDate = action.payload.date;
        return {
          currentDate,
          allSlots: action.payload.times,
          selectedSlots,
          availableTimes: action.payload.times.filter((slot) => {
            return !selectedSlots.some((selected) => {
              return selected.date === currentDate && selected.time === slot;
            });
          }),
        };
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
