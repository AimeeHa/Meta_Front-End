# **Little Lemon Reservation**

## **Purpose**

The Little Lemon web app has now been enhanced to provide a seamless reservation experience for its visitors. Introducing the new Booking Form component, users can effortlessly reserve a table by entering essential details, including the preferred date, time, the number of guests, and even the special occasion, be it a birthday or an anniversary.
What makes this experience even more user-friendly is the real-time display of existing booked table times and available slots, thanks to the utilisation of a complex hooks like `useReducer` and `useContext`. Moreover, a robust API has been created to fetch available slots data and handle the submission of booking forms. With these features, Little Lemon ensures a hassle-free and delightful dining experience for its customers.

This project was created for the Meta Front-End Developer Professional Certificate's capstone. The designs are done by myself following the type system provided by the course.

## **Pages & Features**

- `App.js` contains the main homepage of Little Lemon website.
- `Booking.jsx` and `BookingForm.jsx` make up the Reservation page where customers can book their tables for upcomming dinning experiences.
- `Main.jsx` is created as part of the project's requirements to interact with the booking APIs. In addition, I use this to provide a `BookingContext` to the Booking Form so any reserved dinning slots would still be stored on pages navigation.

![Homepage](https://github.com/AimeeHa/Restaurant_Reservation/blob/master/src/assets/results/homepage1.png)
![Homepage (cont.)](https://github.com/AimeeHa/Restaurant_Reservation/blob/master/src/assets/results/homepage2.png)
![Homepage (cont.)](https://github.com/AimeeHa/Restaurant_Reservation/blob/master/src/assets/results/homepage3.png)
![Reservation Page](https://github.com/AimeeHa/Restaurant_Reservation/blob/master/src/assets/results/booking.png)
![Confirm Reservation](https://github.com/AimeeHa/Restaurant_Reservation/blob/master/src/assets/results/confirmation.png)

## **How to run the application**

- Make sure you have **Node v18** and above installed.

- Install Front-end packages:

```bash
cd restaurant
npm install
```

- Run:

```bash
npm run start
```

## Results

<https://youtu.be/Z20yoqFOM_0>
