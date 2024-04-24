class Booking {
    constructor(customerName, date, time, numGuests) {
        this.customerName = customerName;
        this.date = date;
        this.time = time;
        this.numGuests = numGuests;
    }

    bookingDetails() {
        console.log(`Customer name: ${this.customerName}, Date: ${this.date}, Time: ${this.time}, Number of Guests: ${this.numGuests}`);
    }
}

module.exports = Booking;