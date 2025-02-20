import React from 'react';
import user  from './components/Profile/user.json'
import Profile from 'components/Profile/Profile';
import 'components/Profile/Profile.css';
import data  from './components/Statistics/data.json'
import Statics from 'components/Statistics/Statistics';
import 'components/Statistics/Statistics.css';
import friends from './components/FriendList/friends.json'
import Friendlist from 'components/FriendList/FriendList';
import 'components/FriendList/FriendList.css';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import Transaction from './components/TransactionHistory/transactions.json'
import 'components/TransactionHistory/transactionHistory.css';
export const App = () => {
  return (
    <>
    {user.map((user,index)=>(
      <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} key={index}/>
    ))}
    {data.map((data,index)=>(
      <Statics stats={data} key={index} />
    ))}
    {friends.map((friend,index)=>(
      <Friendlist friends={friend} key={index}/>
    ))}
    <TransactionHistory items={Transaction}/>
    </>
  );
};
 
