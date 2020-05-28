'use strict';

//noinspection JSUnusedLocalSymbols
const sumWithRule = (amount,treshhold,price) => {

    let currentSum = 0;

    for (let i = 0; i < treshhold.length; i++) {
        currentSum += parseInt(amount / treshhold[i])*price[i];
        amount = parseInt(amount % treshhold[i]);
    }

    // console.log(treshhold[treshhold.length - 1])
    // currentSum += parseInt(amount % treshhold[treshhold.length - 1])*price[price.length - 1];

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
        "F": 0,
        "G": 0,
        "H": 0,
        "I": 0,
        "J": 0,
        "K": 0,
        "L": 0,
        "M": 0,
        "N": 0,
        "O": 0,
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
        sku: "F",
        qty: 3,
    },"F");
    amount = getFreeItem(amount,{
        sku: "N",
        qty: 3,
    },"M");
    amount = getFreeItem(amount,{
        sku: "R",
        qty: 3,
    },"Q");
    amount = getFreeItem(amount,{
        sku: "U",
        qty: 4,
    },"U");
    

    let combinedOffers = amount['S'] + amount['T'] + amount['X'] + amount['Y'] + amount['Z'];
    let bundles = parseInt(combinedOffers/3);
    let removableItems = bundles*3;

    
    ['Z','S','T','Y','X'].forEach(element => {
        if(amount[element] - removableItems <= 0){

            removableItems -= amount[element];
            amount[element] = 0;
        
        } else {
            amount[element] -= removableItems;
        }
    });
    


    let sum = 
    sumWithRule(amount['A'], [5, 3, 1], [200, 130, 50]) +
    sumWithRule(amount['B'], [2, 1], [45, 30]) +
    sumWithRule(amount['C'], [1], [20]) +
    sumWithRule(amount['D'], [1], [15]) +
    sumWithRule(amount['E'], [1], [40]) +
    sumWithRule(amount['F'], [1], [10]) +
    sumWithRule(amount['G'], [1], [20]) +
    sumWithRule(amount['H'], [10, 5, 1], [80, 45, 10]) +
    sumWithRule(amount['I'], [1], [35]) +
    sumWithRule(amount['J'], [1], [60]) +
    sumWithRule(amount['K'], [2, 1], [120, 70]) +
    sumWithRule(amount['L'], [1], [90]) +
    sumWithRule(amount['M'], [1], [15]) +
    sumWithRule(amount['N'], [1], [40]) +
    sumWithRule(amount['O'], [1], [10]) +
    sumWithRule(amount['P'], [5, 1], [200, 50]) +
    sumWithRule(amount['Q'], [3, 1], [80, 30]) +
    sumWithRule(amount['R'], [1], [50]) +
    sumWithRule(amount['S'], [1], [20]) +
    sumWithRule(amount['T'], [1], [20]) +
    sumWithRule(amount['U'], [1], [40]) +
    sumWithRule(amount['V'], [3, 2, 1], [130, 90, 50]) +
    sumWithRule(amount['W'], [1], [20]) +
    sumWithRule(amount['X'], [1], [17]) +
    sumWithRule(amount['Y'], [1], [20]) +
    sumWithRule(amount['Z'], [1], [21]) +
    bundles*45;
    


    
    console.log(sum)
    return sum;
};
