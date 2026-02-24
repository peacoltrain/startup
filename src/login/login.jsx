import React from 'react';

import { Authenticated } from './authenticated';
import { Unauthenticated} from './unauthenticated'
import { AuthState } from './AuthState';

export function Login({userName, authState, onAuthChange}) {
  return (
    <main>
      <h1>Try to be a Memory Master</h1>

      {/* This first state is for when a user in Unathenticated */}
      {authState === AuthState.Unauthenticated && (
        <Unauthenticated userName={userName} onLogin={(loginUserName) => {
          onAuthChange(loginUserName, AuthState.Authenticated)
        }}
        />
      )}

      {/* This is for authenticated users. */}
      {authState === AuthState.Authenticated && (
        <Authenticated
          userName={userName}
          onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)}
        />
      )}
    </main>
  );
}