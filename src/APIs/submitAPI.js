const submitAPI = {
  submit: ({ date, time, guests, name, email, phone, occasion }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ message: 'Booking successful' });
      }, 1000);
    });
  },
};

export default submitAPI;
