const titular = 'Priscila';
let balance = 1000.00;
let limit = 100.00;
let enableLimit = true;
const output = "Operação indisponível";

module.exports = {
    
    depositar: function (amount){        
        return balance += amount;
    },

    sacar: function (amount){  
        if(balance >= amount) {     
            return balance -= amount;
        }
        if(enableLimit && ((balance + limit) >= amount)){
            limit = balance ? limit - (amount - balance) : limit - amount;
            balance = 0;    
            return limit;
        }
        return output;
    },

    saldo: function (){        
        return balance;
    },

    limite: function (){ 
        if(enableLimit){       
            return limit;
        }
        return output;
    },

    desativarLimite: function(){
        return enableLimit = false; 
    },

    reajustarLimite: function(amount){
        if(enableLimit){
            return limit = amount;
            console.log(limit);
        }
        return output;
    }
}

