import { useState } from 'react';
import submitAPI from '../APIs/submitAPI';
import fetchAPI from '../APIs/fetchAPI';

export default function BookingForm({
  availableTimes,
  updateTimes,
  initializeTimes,
  isFetching,
}) {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [occasion, setOccasion] = useState('');
  const [message, setMessage] = useState('');

  // Update available times when date changes
  const handleDateChange = (e) => {
    const newDate = e.target.value;
    const newTimes = initializeTimes(newDate);
    updateTimes(newTimes);
  };

  const submitBooking = async () => {
    try {
      const res = await submitAPI.submit({
        date,
        time,
        guests,
        name,
        email,
        phone,
        occasion,
      });
      setMessage(res.message);

      // useReducer not working properly -> created another API to update available times instead
      fetchAPI.updateAvailableTimes(date, time).then((response) => {
        try {
          console.log(response.message);
        } catch (err) {
          console.log(err.message);
        }
      });

      // Clear form after submission
      setDate(new Date());
      setTime('');
      setGuests(1);
      setName('');
      setEmail('');
      setPhone('');
      setOccasion('');
    } catch (err) {
      setMessage(err.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitBooking();

    setTimeout(() => {
      setMessage('');
    }, 5000);
  };

  return (
    <>
      <div>{message}</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <div className="booking-form">
          <div className="booking-form-item">
            <label htmlFor="date">Date</label>
            <input
              required
              type="date"
              name="date"
              id="date"
              pattern="\y{4}-\m{2}-\d{2}"
              value={date}
              onChange={(e) => {
                e.preventDefault();
                setDate(e.target.value);
                handleDateChange(e);
              }}
            />
          </div>
          <div className="booking-form-item">
            <label htmlFor="time">Available Slots</label>
            <select
              required
              name="time"
              id="time"
              value={time}
              onChange={(e) => {
                e.preventDefault();
                setTime(e.target.value);
              }}
            >
              {/* Option from available times array */}
              {isFetching ? (
                availableTimes !== undefined ? (
                  <>
                    <option value="" disabled>
                      Select a time
                    </option>
                    {availableTimes.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </>
                ) : (
                  <option value="">No available slots</option>
                )
              ) : (
                <option value="">Select a date first</option>
              )}
            </select>
          </div>
          <div className="booking-form-item">
            <label htmlFor="guests">No. of Guests</label>
            <input
              required
              type="number"
              name="guests"
              id="guests"
              min="1"
              max="10"
              defaultValue="1"
              value={guests}
              onChange={(e) => {
                e.preventDefault();
                setGuests(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="booking-form-item">
          <label htmlFor="name">Your Name</label>
          <input
            required
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => {
              e.preventDefault();
              setName(e.target.value);
            }}
          />
        </div>
        <div className="booking-form-item">
          <label htmlFor="email">Email</label>
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder='e.g. "abc@gmail.com"'
            value={email}
            onChange={(e) => {
              e.preventDefault();
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="booking-form-item">
          <label htmlFor="phone">Phone Number</label>
          <input
            required
            type="tel"
            name="phone"
            id="phone"
            pattern="[0-9]{11}"
            placeholder='e.g. "01234567890" (11 digits)'
            value={phone}
            onChange={(e) => {
              e.preventDefault();
              setPhone(e.target.value);
            }}
          />
        </div>
        <div className="booking-form-item">
          <label htmlFor="occasion">Occasion</label>
          <select
            name="occasion"
            id="occasion"
            value={occasion}
            onChange={(e) => {
              e.preventDefault();
              setOccasion(e.target.value);
            }}
          >
            <option value="" disabled>
              Choose an occasion
            </option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
          </select>
        </div>
        <button type="submit" className="yellow-button">
          Reserve
        </button>
      </form>
    </>
  );
}
