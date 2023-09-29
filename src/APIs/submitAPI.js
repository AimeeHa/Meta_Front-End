const submitAPI = {
  submit: ({ date, time, guests, name, email, phone, occasion }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          message:
            'Your reservation has been booked. Relax and get ready for the great date.',
        });
      }, 1000);
    });
  },
};

export default submitAPI;
