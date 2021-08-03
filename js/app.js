const buttons = document.querySelectorAll('button');
const reset = document.querySelector('.reset')
const bill = document.querySelector('input[name="output"]')
const persons = document.querySelector('input[name="number"]');
const num1 = document.querySelector('.num1')
const num2 = document.querySelector('.num2')
const custom = document.querySelector('.custom');
const error = document.querySelector('.error-text');
const mediaQuery = window.matchMedia('(min-width: 370px)');



const convert = (value) => {
    return parseFloat(value.toFixed(3));
}
const personal = (value) => {
    persons.addEventListener('input', () => {
        let total = value * parseFloat(persons.value);
        let total2 = parseFloat(total.toFixed(2));

        if (persons.value === '') {
            num2.innerHTML = '$0.00'
        }
        else if (persons.value) {
            num2.innerHTML = `$${total2}`;
        }
    })
}

const percentCalculator = (percentages, values) => {
    return (percentages / 100) * values
}


buttons.forEach((elem) => {
    elem.addEventListener('click', (e) => {
        const Percentvals = parseInt(elem.innerHTML.slice(0, -1));
        let bills = parseInt(bill.value);
        if (typeof parseInt(persons.value) === 'number') {
            var tipsAmt = percentCalculator(bills, Percentvals)
            let totaltips = convert(tipsAmt);
            if (totaltips === 'NaN') {
                num1.innerHTML = '$0.00'
            } else {
                num1.innerHTML = `$${totaltips}`;
            }
        }
        e.stopPropagation();
        personal(tipsAmt);

    })
})


custom.addEventListener('input', () => {
    let bills = parseInt(bill.value);
    const customNum = parseFloat(custom.value);
    var Customamt = percentCalculator(bills, customNum);
    let totalCustom = convert(Customamt);
    if (totalCustom === 'NaN') {
        num1.innerHTML = '$0.00'
    } else {
        num1.innerHTML = `$${totalCustom}`;
    }
    personal(Customamt);



})

persons.addEventListener('input', () => {
    if (mediaQuery.matches && persons.value === "0") {
        persons.classList.add('error')
        num2.innerHTML = '$0.00'
        error.style.display = 'inline'
    } else {
        persons.classList.remove('error')
        error.style.display = 'none';
    }
})


reset.addEventListener('click', () => {
    persons.value = '';
    bill.value = '';
    custom.value = '';
    num1.innerHTML = '$0.00';
    num2.innerHTML = '$0.00'
})