
export function randomNumbers(from, to, length) {
    const numbers = [0];
    for (let i = 1; i < length; i++) {
    numbers.push(Math.ceil(Math.random() * (from - to) + to));
    }
    return numbers;
}


export function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


