import React from 'react'


export function Unauthenticated(props) {
    const [userName, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    function loginUser(){
        console.log("Tried to sign up " + userName + " with a password of " + password)
        localStorage.setItem('userName', userName);
    }

    function signUp(){
        console.log("Tried to sign up " + userName + " with a password of " + password);
        localStorage.setItem('userName', userName);
    }

    return (
        <form>
        <div>This is a test!</div>
        <div>
          <span>Username</span>
          <input id="userName" type="text" placeholder="Username" autoComplete="userName" onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div>
          <span>Password</span>
          <input id="password" type="password" placeholder="Password" onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <button type="submit"  onClick={loginUser}>Login</button>
        <button type="submit" onClick={signUp}>Sign UP</button>
      </form>
    );
}