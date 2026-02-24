import React from 'react'


export function Unauthenticated(props) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    function loginUser(){
        console.log("Tried to log in: " + username);
        localStorage.setItem('user', username)
    }


    return (
        <form>
        <div>This is a test!</div>
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
    );
}