import { link } from 'fs';
import React from 'react'

interface user {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users',
    {cache:'no-store'}  // in this line data will get in every 10 min 
    // here we can use cache function of builtin next.js there are several options like if we put cache: no-store so it wll not store cache like that
  )
  const users : user[] = await res.json();
  return (
    <div>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map(user => <li key = {user.id}>{user.name}</li>)}
      </ul>
      <p>users page</p>
    </div>
  )
}

export default UsersPage
