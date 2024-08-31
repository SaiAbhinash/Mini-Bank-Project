import Withdraw from './Withdraw';
import Createuser from './createuser'
import React, { useState } from 'react';
import Deposit from './Deposit';

function Users() {
    const [users, setUsers] = useState([
        {
          name: 'Sandeep',
          userId: 'sandeep',
          password: 'sandeep',
          pincode: '523105',
          accountType: 'savings',
          balance: 10000,
        },
        {
          name: 'Siri',
          userId: 'siri',
          password: 'siri',
          pincode: '123456',
          accountType: 'checking',
          balance: 5000,
        },
        {
          name: 'Deekshi',
          userId: 'deekshi',
          password: 'deekshi',
          pincode: '789012',
          accountType: 'savings',
          balance: 7500,
        },
        {
          name: 'Abhi',
          userId: 'abhi',
          password: 'abhi',
          pincode: '523105',
          accountType: 'savings',
          balance: 10000,
        },
        {
          name: 'Thendral',
          userId: 'thendral',
          password: 'thendral',
          pincode: '123456',
          accountType: 'checking',
          balance: 5000,
        },
        {
          name: 'Thanooj',
          userId: 'thanooj',
          password: 'thanooj',
          pincode: '789012',
          accountType: 'savings',
          balance: 7500,
        },
      ]);
    
      <Createuser list={users} />

      const [currentUser, setCurrentUser] = useState(null);
    
      const handleUserChange = (userId) => {
        const user = users.find((user) => user.userId === userId);
        console.log(user);
        setCurrentUser(user);
      };
    
      const handleBalanceChange = (newBalance) => {
        const updatedUsers = users.map((user) =>
          user.userId === currentUser.userId ? { ...user, balance: newBalance } : user
        );
        setUsers(updatedUsers);
        setCurrentUser({ ...currentUser, balance: newBalance });
      };
    
    
      if (!currentUser) {
        return (
          <div className="App">
             <Createuser list={users} />
            {/* <h1>Login</h1>
            <form onSubmit={handleLogin}>
              <label htmlFor="userId">User ID:</label>
              <input type="text" id="userId" name="userId" required />
              <br />
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
              <br />
              <button type="submit">Login</button>
            </form> */}
          </div>
        );
      }
    
      return (
        
        <div className="App">
            <Createuser list={users} />
          {/* <h1>Welcome, {currentUser.name}!</h1>
          <Withdraw user={currentUser} balance={currentUser.balance} setBalance={handleBalanceChange} userId={currentUser.userId} />
          <Deposit balance={currentUser.balance} setBalance={handleBalanceChange} userId={currentUser.userId} />
          <Createuser handleUserChange={handleUserChange} /> */}
        </div>
      );
}

export default Users


