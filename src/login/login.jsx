import React from 'react';

export function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function loginUser(){
    console.log("Tried to log in: " + username);
    localStorage.setItem('user', username)
  }

  function userChange(e){
    setUsername(e.target.value)
  }

  return (
    <main>
      <h1>Try to be a Memory Master</h1>
      <form onSubmit={loginUser}>
        <div>
          <span>Username</span>
          <input id="username" type="text" placeholder="Username" autoComplete="username" onChange={userChange}/>
        </div>
        <div>
          <span>Password</span>
          <input id="password" type="password" placeholder="Password" />
        </div>
        <button type="submit"  onClick={loginUser}>Login</button>
        <button type="submit">Sign UP</button>
      </form>
    </main>
  );
}