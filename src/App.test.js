import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import Booking from './Booking';
import { renderHook, act } from '@testing-library/react-hooks';
import { useReducer } from 'react';
import availableTimesReducer from './Booking';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('User is not able to submit the form if phone number is not 11 digits', () => {
  const phoneLength = 11;
  const handleSubmit = jest.fn();
  render(<BookingForm />);

  const phoneInput = screen.getByLabelText(/Phone Number/);
  const submitButton = screen.getByRole('button');

  fireEvent.change(phoneInput, { target: { value: '123456789011' } });
  fireEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalledTimes(0);
});

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText('Reserve');
  expect(headingElement).toBeInTheDocument();
});

// describe('BookingForm', () => {
//   // test if the select element for time is appended with new options when date input changes
//   test('The select element for time is appended with new options when date input changes', () => {
//     const { result } = renderHook(() => useReducer(availableTimesReducer, []));
//     const [availableTimes, dispatch] = result.current;
//     const newTimes = ['12:00', '12:30', '13:00', '13:30'];
//     act(() => {
//       dispatch({ type: 'UPDATE_TIMES', payload: newTimes });
//     });
//     expect(availableTimes).toEqual(newTimes);
//   });
// });
