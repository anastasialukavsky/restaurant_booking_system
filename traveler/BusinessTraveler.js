const Traveler = require('./Traveler');

class BusinessTraveler extends Traveler {
    constructor(name, origin, destination, company) {
        super(name, origin, destination);
        this.company = company;
    }
}

module.exports = BusinessTraveler;