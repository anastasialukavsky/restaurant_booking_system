const Booking = require('./Booking');

class EventBooking extends Booking {
    constructor(customerName, date, time, numGuests, eventType) {
        super(customerName, date, time, numGuests);
        this.eventType = eventType;
    }
}

module.exports = EventBooking;