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
            num1.innerHTML = tipsAmt;
        }
        persons.addEventListener('input', () => {
            let total = tipsAmt * parseInt(persons.value);
            if (persons.value === '') {
                num2.innerHTML = '$0.00'
            }
            else {
                num2.innerHTML = total;
            }
        })

    })
})