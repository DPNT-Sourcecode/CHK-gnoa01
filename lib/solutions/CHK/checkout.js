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

        if(! SKU in amount){
            return -1;
        }

        amount[sku]++;        
    }
};