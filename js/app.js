const buttons = document.querySelectorAll('button');
const reset = document.querySelector('.reset')
const bill = document.querySelector('input[name="output"]')
const persons = document.querySelector('input[name="number"]');
const num1 = document.querySelector('.num1')
const num2 = document.querySelector('.num2')



const percentCalculator = (percentages, values) => {
    return (percentages / 100) * values
}

buttons.forEach((elem) => {
    elem.addEventListener('click', () => {
        const Percentvals = parseInt(elem.innerHTML.slice(0, -1));
        let bills = parseInt(bill.value);
        if (typeof parseInt(persons.value) === 'number') {
            var tipsAmt = percentCalculator(bills, Percentvals)
            let totaltips = parseFloat(tipsAmt.toFixed(3));
            num1.innerHTML = `$${totaltips}`;
        }
        persons.addEventListener('input', () => {
            let total = tipsAmt * parseFloat(persons.value);
            let total2 = parseFloat(total.toFixed(2));

            if (persons.value === '') {
                num2.innerHTML = '$0.00'
            }
            else if (persons.value) {
                num2.innerHTML = `$${total2}`;
            }
        })
    })
})
reset.addEventListener('click', () => {
    persons.value = '';
    bill.value = '';
    num1.innerHTML = '$0.00';
    num2.innerHTML = '$0.00'
})