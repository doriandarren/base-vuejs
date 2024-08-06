function randomNumbers(from, to, length) {
    const numbers = [0];
    for (let i = 1; i < length; i++) {
    numbers.push(Math.ceil(Math.random() * (from - to) + to));
    }
    return numbers;
}


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



/**
 * Return money format
 * EX. 1340.00 -> 1.340,00 €
 */
const formatMoney = (valor) => {
    const formatter = new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'EUR'
    })
    return formatter.format(valor);
};


export{
    randomNumbers,
    delay,
    formatMoney
}