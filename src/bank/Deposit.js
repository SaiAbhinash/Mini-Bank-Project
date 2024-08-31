import React from 'react'

function Deposit(props) {
    const { balance, setBalance } = props;

    const handleDeposit = (amount) => {
      if (amount <= balance) {
        // Update the balance
        setBalance(balance + amount);
        console.log(`Deposit ${amount}. New balance: ${balance + amount}`);
      } 
    };
  
    return (
      <div>
        <h1>Deposit</h1>
        <p>Balance: {balance}</p>
        <button onClick={() => handleDeposit(100)}>Deposit 100</button>
        <button onClick={() => handleDeposit(500)}>Deposit 500</button> 
        <button onClick={() => handleDeposit(2000)}>Deposit 2000</button> 
      </div>
    );
}

export default Deposit
