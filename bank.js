// Implement a bank account management system using JavaScript objects and functions.
// Instructions:
// Create a constructor function called BankAccount that takes accountNumber, name, type, and balance as arguments.
// Inside the constructor, initialize the properties of the bank account object.
// Add the following methods to the BankAccount prototype:
// deposit(amount) - Deposits the specified amount into the account.
// withdraw(amount) - Withdraws the specified amount from the account if the balance is sufficient.
// checkBalance() - Prints the account's balance.
// isActive() - Checks and returns whether the account is active.
// Create multiple BankAccount objects representing different accounts.

// Perform a series of deposit, withdrawal, and balance check operations on these accounts.

// Test the isActive method to check if the accounts are active.

// Implement a function getTotalBalance that calculates and returns the total balance of all active accounts.

// Test the getTotalBalance function to display the total balance of all active accounts.

// let person={
//   name:"nidhi",
// }
// function showData(age,city){
// console.log(this.name+ age +city)
// }
// showData.call(person,26,"kanpur")
// // showData.apply(person,[26,"kanpur"])
// // when we use apply then after first argument all the argument should in in the form of array
// let data=showData.bind(person,26,"kanpur")

// assignment
function BankAccount(accountNumber,name ,type,balance,isActive)
{
  this.accountNumber=accountNumber;
  this.name=name;
  this.type=type;
  this.isActive=isActive;
  this.balance=balance;

  
  this.deposit=function(Amount){
    this.balance+=Amount;
    console.log(`your updated balance is :${this.balance} rs`)
    let body=document.querySelector('body');
    let h1=document.createElement('h1')
    h1.innerText=`your updated balance is :${this.balance} rs`;
    body.appendChild(h1);
  }
    
  
  this.withdrawl1=function(Amount){
    if(this.balance>=Amount){
    this.balance-=Amount;
      
       
    console.log(`your updated balance is :${this.balance} rs`)
      
   // let div=document.getElementbyId('second');
   //  let h3=document.createElement('h3')
   //  h3.innerText=`your updated balance is :${this.balance} rs`;
   //  div.appendChild(h3);
    }
    else{
    console.log("insufficient amount")
    }
  }
  this.isActive=function(){
    if(this.balance<0){
      console.log("account is inactive")
    }
    else{
      console.log("your account is active")
    }
  }
    
  
  }
     

let account1=new BankAccount(25896345,"nidhi","saving",4000,true);
let account2=new BankAccount(589632478,"vivek","saving",8000,true);
let account3=new BankAccount(8569476989,"shubham","saving",10000,true);

account1.deposit(2000)
account1.withdrawl1(4000)
account1.isActive();

account2.deposit(2000)
account2.withdrawl1(4000)
account2.isActive();

account3.deposit(2000)
account3.withdrawl1(5000)
account3.isActive();


  



