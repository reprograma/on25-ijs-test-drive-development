function getChange(amount, coins) {
    if(amount === 0) {
        return [];
    } else {
        if(amount >= coins[0]) {
            left = (amount - coins[0]);
            return [coins[0]].concat(getChange(left, coins));
        } else {
            coins.shift();
            return getChange(amount, coins);
        }
    }
}

let amount = 100;
let coins = [50, 25, 1];

let change = getChange(amount, coins)

console.log(change);

module.exports = getChange