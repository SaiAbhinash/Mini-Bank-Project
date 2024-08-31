import React, { useState } from 'react';
import Createuser from './createuser';
import Deposit from './Deposit';
import Withdraw from './Withdraw';

function Home(props) {
  const [users, setUsers] = useState(props.list);
  const [currentUser, setCurrentUser] = useState(props.user);
  const [showDeposit, setShowDeposit] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);

  const handleBalanceChange = (newBalance) => {
    setCurrentUser({ ...currentUser, balance: newBalance });
  };
  
  const handleUserChange = (newUser) => {
    setUsers([...users, newUser]);
  };

  const handleDepositClick = () => {
    setShowDeposit(true);
    setShowWithdraw(false);
  };

  const handleWithdrawClick = () => {
    setShowWithdraw(true);
    setShowDeposit(false);
  };

  return (
    <div className="App">
      <Createuser handleUserChange={handleUserChange} />
      <h1>Welcome, {currentUser.name}!</h1>

      <button onClick={handleWithdrawClick}>Withdraw</button>
      <button onClick={handleDepositClick}>Deposit</button>

      {showWithdraw && (
        <Withdraw
          user={currentUser}
          balance={currentUser.balance}
          setBalance={handleBalanceChange}
          userId={currentUser.userId}
        />
      )}

      {showDeposit && (
        <Deposit
          balance={currentUser.balance}
          setBalance={handleBalanceChange}
          userId={currentUser.userId}
        />
      )}
    </div>
  );
}

export default Home;
