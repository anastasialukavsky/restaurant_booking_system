const Booking = require('./Booking');

class GroupBooking extends Booking {
    constructor(customerName, date, time, numGuests, groupSize) {
        super(customerName, date, time, numGuests);
        this.groupSize = groupSize;
    }
}

module.exports = Booking;