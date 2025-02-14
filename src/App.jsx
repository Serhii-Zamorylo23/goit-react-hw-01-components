import React from 'react';
import user  from './components/Profile/user.json'
import Profile from 'components/Profile/Profile';
import 'components/Profile/Profile.css'
export const App = () => {
  return (
    <>
    {user.map((user,index)=>(
      <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} key={index}/>
    ))}
    </>
  );
};
 
