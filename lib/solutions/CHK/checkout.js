'use strict';

//noinspection JSUnusedLocalSymbols
const sumWithRule = (amount,treshhold,price) => {

    let currentSum = 0;

    for (let i = 0; i < treshhold.length; i++) {
        currentSum += parseInt(amount / treshhold[i])*price[i];
        amount = parseInt(amount % treshhold[i]);
    }

    currentSum += parseInt(amount % treshhold[treshhold.length - 1])*price[price.length - 1];

    return currentSum
}




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
        "G": 0,
        "H": 0,
        "I": 0,
        "J": 0,
        "K": 0,
        "L": 0,
        "M": 0,
        "N": 0,
        "P": 0,
        "Q": 0,
        "R": 0,
        "S": 0,
        "T": 0,
        "U": 0,
        "V": 0,
        "W": 0,
        "X": 0,
        "Y": 0,
        "Z": 0,
    };

    for (let index = 0; index < skus.length; index++) {
        let sku = skus.charAt(index);

        if(amount[sku] === undefined){
            console.log(-1)
            return -1;
        }

        amount[sku]++;        
    }

    console.log(sumWithRule(amount['A'], [5,3], [200, 130, 50]));

    amount['B'] = amount['B'] - parseInt(amount['E']/2) < 0 ? 0 : amount['B'] - parseInt(amount['E']/2);
    amount['F'] -= parseInt(amount['F']/3);
    
    let sum = 
    


    parseInt(amount['A']/5)*200 +
        parseInt(parseInt(amount['A']%5)/3)*130 +
        parseInt(parseInt(amount['A']%5)%3)*50 +
        parseInt(amount['B']/2)*45 +
        parseInt(amount['B']%2)*30 +
        amount['C']*20 +
        amount['D']*15 +
        amount['E']*40 + 
        amount['F']*10; 


    
    // console.log(sum)
    return sum;
};




