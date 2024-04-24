const Restaurant = require('./Restaurant');

class FineDining extends Restaurant {
    constructor(name, address, cuisineType, dressCode){
        super(name, address, cuisineType);
        this.dressCode = dressCode;
    }
}

module.exports = FineDining;