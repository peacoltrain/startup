import React from 'react'


export function Unauthenticated(props) {
    const [userName, setUsername] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);

    async function loginOrCreate(endpoint) {
      const response = await fetch(endpoint, {
        method: 'post',
        body: JSON.stringify({ email: userName, password: password }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      if (response?.status === 200) {
        localStorage.setItem('userName', userName);
        props.onLogin(userName);
      } else {
        const body = await response.json();
        setDisplayError(`⚠ Error: ${body.msg}`);
      }
    }

    return (
        <form>
        <div>
          <span>Username </span>
          <input id="userName" type="text" placeholder="Username" autoComplete="userName" onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div>
          <span>Password </span>
          <input id="password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type="button"  onClick={() =>loginOrCreate('/api/auth/login')} disabled={!userName || !password}>Login</button>
        <button type="button" onClick={() => loginOrCreate('/api/auth/create')} disabled={!userName || !password}>Sign UP</button>
        {displayError && <div>{displayError}</div>}
      </form>
    );
}