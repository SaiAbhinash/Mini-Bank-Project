import React from 'react';


function Withdraw(props) {
  const { balance, setBalance } = props;

  const handleWithdraw = (amount) => {
    if (amount <= balance) {
      // Update the balance
      setBalance(balance - amount);
      console.log(`Withdrawn ${amount}. New balance: ${balance - amount}`);
    } else {
      console.log(`Insufficient balance. Available balance: ${balance}`);
    }
  };

  return (
    <div>
      <h1>Withdraw</h1>
      <p>Balance: {balance}</p>
      <button onClick={() => handleWithdraw(100)}>Withdraw 100</button>
      <button onClick={() => handleWithdraw(500)}>Withdraw 500</button> 
      <button onClick={() => handleWithdraw(2000)}>Withdraw 2000</button> 
    </div>
  );
}

export default Withdraw;
