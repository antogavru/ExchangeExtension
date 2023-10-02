
document.addEventListener('DOMContentLoaded', function () {

    const amount = document.getElementById('amount');
    const currency = document.getElementById('currency');
    const convert = document.getElementById('convert');
    const result = document.getElementById('result');

    const API_KEY = "QbRo9WADUXIPOJubHgeTWg==RCdJ13rDPPsVLeUt"
    const apiUrl = "https://api.api-ninjas.com/v1/exchangerate?pair="

    convert.addEventListener('click', () => {
        const amountTotal = amount.value;
        const currencyChosen= currency.value;
        const url = apiUrl + currencyChosen + '_EUR';

        fetch(url, {
            headers: {
                'X-API-KEY': API_KEY
            }
        })
        .then(response => response.json())
        .then(data => {
            const rate = data.exchange_rate;
            const resultValue = amountTotal * rate;
            result.innerHTML = `${amountTotal} ${currencyChosen} = ${resultValue.toFixed(2)} EUR`
        })
            .catch(error => {
                console.error('Request failed:', error);
                result.innerHTML = 'An error occured please try again later.'
            })
    })
})
