var dollar =10700;
var euro = 12300;
var rubl = 148 ;

form.addEventListener('submit', function (e) {
    e.preventDefault()
    
    if (currency.value=='dollar') {
        result.textContent=(Number(money.value)/dollar).toFixed(2) + 'dollar'

    } else  if(currency.value=='euro'){
        result.textContent=(Number(money.value)/euro).toFixed(2) + 'euro'

    } else {
        result.textContent=(Number(money.value)/rubl).toFixed(2) + 'rubl'
    }
})