import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import Booking from './Booking';
import { renderHook, act } from '@testing-library/react-hooks';
import { useReducer } from 'react';
import availableTimesReducer from './Booking';

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText('Reserve');
  expect(headingElement).toBeInTheDocument();
});

describe('BookingForm', () => {
  // test if the select element for time is appended with new options when date input changes
  test('The select element for time is appended with new options when date input changes', () => {
    const { result } = renderHook(() => useReducer(availableTimesReducer, []));
    const [availableTimes, dispatch] = result.current;
    const newTimes = ['12:00', '12:30', '13:00', '13:30'];
    act(() => {
      dispatch({ type: 'UPDATE_TIMES', payload: newTimes });
    });
    expect(availableTimes).toEqual(newTimes);
  });
});
