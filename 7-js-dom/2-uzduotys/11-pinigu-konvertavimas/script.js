let currencies = [
    {
        id: 'usd',
        name: 'doleriai',
        shortName: 'USD',
        rates: [
            {
                currencyId: 'eur',
                rate: 0.97
            },
            {
                currencyId: 'rub',
                rate: 120
            }
        ]
    },
    {
        id: 'eur',
        name: 'eurai',
        shortName: 'EUR',
        rates: [
            {
                currencyId: 'usd',
                rate: 1.02
            },
            {
                currencyId: 'rub',
                rate: 150
            }
        ]
    },
    {
        id: 'rub',
        name: 'rubliai',
        shortName: 'RUB',
        rates: [
            {
                currencyId: 'usd',
                rate: 0.08
            },
            {
                currencyId: 'eur',
                rate: 0.06
            }
        ]
    }
];


function addDataIntoDropdownShort(items) {
    let divPart = document.querySelector(".currency-from")

    let newOptions = items.map(item => {
        return `<option value=${item.id}'>${item.shortName}</option>`
    });
    console.log(newOptions.join(''))


    divPart.innerHTML += `
        <select name="from" id="slect-currency-from">
            ${items.map
        }
        </select>
`;
};

function addDataIntoDropdownLong(items) {

};


{/* <select name="from" id="slect-currency-from">
<option value="EUR">EUR</option>
<option value="USD">USD</option>
<option value="RUB">RUB</option>
</select> */}