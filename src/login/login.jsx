import React from 'react';

export function Login() {
  return (
    <main>
      <h1>Try to be a Memory Master</h1>
      <form method="get" action="game.html">
        <div>
          <span>Username</span>
          <input id="username" type="text" placeholder="Username" autoComplete="username" />
        </div>
        <div>
          <span>Password</span>
          <input id="password" type="password" placeholder="Password" />
        </div>
        <button type="submit">Login</button>
        <button type="submit">Sign UP</button>
      </form>
    </main>
  );
}