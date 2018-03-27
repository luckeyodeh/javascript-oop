class Vacation {
    constructor (place, population, cost) {
        this.place = place;
        this.population = population;
        this.cost = cost;
    }
    report () {
        return `I went to ${this.place} with a population of ${this.population} and I spent ${this.cost}.`
    }
}

class firstVacation extends Vacation {
    constructor (place, population, cost, interest) {
        super(place, population, cost);
    }
    report () {
        return `I went to ${this.place}, with a population of ${this.population} and I spent ${this.cost}. An area of interest was ${this.interest}`
    }
}

class secondVacation extends Vacation {
    constructor (place, population, cost) {
        super(place, population, cost);
        this.interest = interest;
    }
    report () {
        return `I went to ${this.place}, with a population of ${this.population} and I spent ${this.cost}.`
    }
}

let a = new Vacation ('France', 50000, "1000 naira");
let b = new Vacation ('US', 500000, "1200 naira", 'Grand Canyon');
let c = new Vacation ('Ghana', 10000, "100 naira");

console.log(a.report());
console.log(b.report());
console.log(c.report());