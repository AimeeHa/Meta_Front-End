// Create a mock API as Meta script file no longer available
const SepDates = [
  '2023-09-01',
  '2023-09-02',
  '2023-09-03',
  '2023-09-04',
  '2023-09-05',
  '2023-09-06',
  '2023-09-07',
  '2023-09-08',
  '2023-09-09',
  '2023-09-10',
  '2023-09-11',
  '2023-09-12',
  '2023-09-13',
  '2023-09-14',
  '2023-09-15',
  '2023-09-16',
  '2023-09-17',
  '2023-09-18',
  '2023-09-19',
  '2023-09-20',
  '2023-09-21',
  '2023-09-22',
  '2023-09-23',
  '2023-09-24',
  '2023-09-25',
  '2023-09-26',
  '2023-09-27',
  '2023-09-28',
  '2023-09-29',
  '2023-09-30',
];
const OctDates = [
  '2023-10-01',
  '2023-10-02',
  '2023-10-03',
  '2023-10-04',
  '2023-10-05',
  '2023-10-06',
  '2023-10-07',
  '2023-10-08',
  '2023-10-09',
  '2023-10-10',
];

const fetchAPI = {
  fetchAvailableTimes: (selectedDate) => {
    // Simulate an asynchronous request
    return new Promise((resolve, reject) => {
      // Simulate a delay to mimic network latency
      setTimeout(() => {
        if (SepDates.includes(selectedDate)) {
          const availableTimes = ['12:00', '12:30', '13:00', '13:30', '14:00'];
          resolve({ availableTimes });
        } else if (OctDates.includes(selectedDate)) {
          const availableTimes = ['18:00', '18:30', '19:00', '19:30', '20:00'];
          resolve({ availableTimes });
        } else {
          reject(new Error('Date not found'));
        }
      }, 1000);
    });
  },
};

export default fetchAPI;
