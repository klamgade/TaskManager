
class Calculate {
    constructor() {
        this.sum = this.sum.bind(this);
    }

    sum(a, b) {
        return a + b;
    }
}

module.exports = Calculate;