'use strict';

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    
    let amount = {
        "A": 0,
        "B": 0,
        "C": 0,
        "D": 0,
    };

    for (let index = 0; index < skus.length; index++) {
        let sku = skus.charAt(index);

        if(! sku in amount){
            console.log(-1)
            return -1;
        }

        amount[sku]++;        
    }

    let sum = parseInt(amount['A']/3)*130 + parseInt(amount['A']%3)*50 + parseInt(amount['B']/2)*45 + parseInt(amount['B']%2)*30 + amount['C']*20 + amount['D']*15;
    
    console.log(sum)
    return sum;
};