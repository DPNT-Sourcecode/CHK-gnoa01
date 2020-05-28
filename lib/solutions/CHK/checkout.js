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

    let sum = parseInt(amount['A']/5)*200 +
        parseInt(amount['A']%5)

    
    console.log(sum)
    return sum;
};
