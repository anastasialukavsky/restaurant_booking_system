class Traveler {
    constructor(name, origin, destination) {
        this.name = name;
        this.origin = origin;
        this.destination = destination;
    }

    travelerDetails() {
        console.log(`Traveler Name: ${this.name}, Origin: ${this.origin}, Destination: ${this.destination}`);
    }
}

module.exports = Traveler;