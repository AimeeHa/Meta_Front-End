// A self-created mock API as Meta script file no longer available
const Slots = generateSlots('2023-08-01', '2023-10-31', 30);

const fetchAPI = {
  fetchAvailableTimes: (selectedDate) => {
    // Simulate an asynchronous request
    return new Promise((resolve, reject) => {
      // Simulate a delay to mimic network latency
      setTimeout(() => {
        const filteredDate = Slots.find((date) => date.date === selectedDate);
        if (filteredDate.times?.length > 0) {
          const availableTimes = filteredDate.times;
          resolve({ availableTimes });
        } else {
          reject(new Error('No available times'));
        }
      }, 1000);
    });
  },

  // To be called when the user submits the form
  updateAvailableTimes: (selectedDate, selectedTime) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const filteredDate = Slots.find((date) => date.date === selectedDate);
        if (filteredDate.times?.length > 0) {
          filteredDate.times = filteredDate.times.filter(
            (time) => time !== selectedTime,
          );
          resolve({ message: 'Updated available times' });
        } else {
          reject(new Error('No available times'));
        }
      }, 1000);
    });
  },
};

export default fetchAPI;

// generating slots function -----------------------------------------
function generateSlots(startDate, endDate, intervalInMinutes) {
  const slots = [];
  const currentDate = new Date(startDate);
  const endDateObj = new Date(endDate);

  while (currentDate <= endDateObj) {
    const date = currentDate.toISOString().split('T')[0];
    const times = generateTimes(intervalInMinutes);
    slots.push({ date, times });

    currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
  }

  return slots;
}

function generateTimes(intervalInMinutes) {
  const times = [];
  const startTime = new Date('1970-01-01T17:00:00');
  const endTime = new Date('1970-01-01T22:31:00');

  while (startTime <= endTime) {
    times.push(formatTime(startTime));
    startTime.setMinutes(startTime.getMinutes() + intervalInMinutes);
  }

  return times;
}

function formatTime(time) {
  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}
