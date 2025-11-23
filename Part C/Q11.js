let myWallet = createWallet();
function createWallet(){
    let balance =0;
    return{
        addMoney:function(amount){
            balance+=amount;
        },
        checkBalance:function(){
            return balance;
        }
    };
}



console.log(myWallet.addMoney(500));
console.log(myWallet.addMoney(200));
console.log(myWallet.checkBalance());
 
