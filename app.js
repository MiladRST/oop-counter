
function getElement(element) {
    const counter = document.querySelector(element);
    if (counter) {
        return counter;
    } else {
        throw new Error('new error')
    }
}

function Counter(element, value) {
    this.counter = element;
    this.value = value;
    //selectors
    this.count = element.querySelector('.value');
    this.count.textContent = this.value;
    this.incBtn = element.querySelector('.btn1');
    this.decBtn = element.querySelector('.btn2');
    this.resetBtn = element.querySelector('.btn3');
    // event handler
    this.incBtn.addEventListener('click', this.increment.bind(this));
    this.decBtn.addEventListener('click', this.decrement.bind(this));
    this.resetBtn.addEventListener('click', this.reset.bind(this));

}

Counter.prototype.increment = function () {
    this.value++;
    this.count.textContent = this.value;
    console.log(this.value);
}
Counter.prototype.decrement = function () {
    if (this.value !== 0) {
        this.value--;
        this.count.textContent = this.value;
        console.log(this.value);
    }
}
Counter.prototype.reset = function () {
    this.value = 0;
    this.count.textContent = this.value;
    console.log(this.value);
}


const counter1 = new Counter(getElement('.first-counter'), 100);
const counter2 = new Counter(getElement('.second-counter'), 500);





