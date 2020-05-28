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

const getFreeItem = (amount,src,dest) => {
    
    amount[dest] = amount[dest] - parseInt(amount[src.sku]/src.qty) < 0 ? 0 : amount[dest] - parseInt(amount[src.sku]/src.qty);

    return amount;
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

    
    amount = getFreeItem(amount,{
        sku: "E",
        qty: 2,
    },"B");
    amount = getFreeItem(amount,{
        src: "F",
        qty: 3,
    },"F");
    amount = getFreeItem(amount,{
        src: "N",
        qty: 3,
    },"M");
    
    let sum = 
    sumWithRule(amount['A'], [5,3], [200, 130, 50]) +
    sumWithRule(amount['B'], [2], [45, 30]) +
    sumWithRule(amount['C'], [], [20]) +
    sumWithRule(amount['D'], [], [15]) +
    sumWithRule(amount['E'], [], [40]) +
    sumWithRule(amount['F'], [], [10]) +
    sumWithRule(amount['G'], [], [20]) +
    sumWithRule(amount['H'], [10, 5], [80, 45, 10]) +
    sumWithRule(amount['I'], [], [35]) +
    sumWithRule(amount['J'], [], [60]) +
    sumWithRule(amount['K'], [2], [150, 80]) +
    sumWithRule(amount['L'], [], [90]) +
    sumWithRule(amount['M'], [], [15]) +
    sumWithRule(amount['N'], [], [40]) +
    sumWithRule(amount['O'], [], [10]) +
    sumWithRule(amount['P'], [5], [200, 50]) +
    sumWithRule(amount['Q'], [3], [80, 30]) +
    sumWithRule(amount['R'], [], [50]) +
    sumWithRule(amount['S'], [], [30]) +
    sumWithRule(amount['T'], [], [20]) +
    sumWithRule(amount['U'], [], [40]) +
    sumWithRule(amount['V'], [3, 2], [130, 90, 50]) +
    sumWithRule(amount['W'], [], [20]) +
    sumWithRule(amount['X'], [], [90]) +
    sumWithRule(amount['Y'], [], [10]) +
    sumWithRule(amount['Z'], [], [50]);
    


    
    // console.log(sum)
    return sum;
};



