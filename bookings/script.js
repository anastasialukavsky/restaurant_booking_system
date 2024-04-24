const Booking = require('./Booking');

const prompt = require('prompt-sync')()

const customerName = prompt("Hello! What is your name for the reservation? ");
const date = prompt("When? ");
const time = prompt("What time? ");
const numGuests = prompt("How many people? ");

const booking = new Booking(customerName, date, time, numGuests);

booking.bookingDetails();
