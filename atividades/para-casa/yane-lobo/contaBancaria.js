const account = {
    name: "Jane Doe",
    balance: 1000,
    limit: 5000
}

const withdraw = (value) => {

    if(account.balance >= value){
        account.balance -= value;
        return `Your current balance is: ${account.balance}`;
    } else if (account.limit >= value){
        account.balance -= value;
        account.limit += account.balance;
        return `Your current balance is: ${account.balance}. Your current limit is: ${account.limit}`;
    } else {
        return "You don't have enough balance or limit to perform this operation."
    }
}

const limitIncrease = (value) => {
    account.limit += value;
    return `Your limit was increased to ${account.limit}`;
}

const limitDecrease = (value) => {
    account.limit -= value;
    return `Your limit was decreased to ${account.limit}`;
}

const limitDeactivate = () => {
    account.limit -= account.limit;
    return "Your limit was deactivated"
}

module.exports = { withdraw, limitIncrease, limitDecrease, limitDeactivate }