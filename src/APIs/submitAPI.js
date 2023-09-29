const submitAPI = {
  submit: (formData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          status: 200,
          message:
            'Your reservation has been booked. Relax and get ready for the great date.',
        });
      }, 1000);
    });
  },
};

export default submitAPI;
