'use strict';

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    
    if(skus === undefined || typeof skus !== 'string'){
        console.log(-1)
        return -1;
    }

    let amount = {
        "A": 0,
        "B": 0,
        "C": 0,
        "D": 0,
        "E": 0,
    };

    for (let index = 0; index < skus.length; index++) {
        let sku = skus.charAt(index);

        if(amount[sku] === undefined){
            console.log(-1)
            return -1;
        }

        amount[sku]++;        
    }

    amount['B'] = amount['B'] - parseInt(amount['E']/2) < 0 ? 0 : amount['B'] - parseInt(amount['E']/2);
    
    
    let sum = parseInt(amount['A']/5)*200 +
        parseInt(parseInt(amount['A']%5)/3)*130 +
        parseInt(parseInt(amount['A']%5)%3)*50 +
        parseInt(amount['B']/2)*45 +
        parseInt(amount['B']%2)*30 +
        amount['C']*20 +
        amount['D']*15 +
        amount['E']*40;


    
    console.log(sum)
    return sum;
};