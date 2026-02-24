import React from 'react';

import { Unauthenticated} from './unauthenticated'
import { AuthState } from './AuthState';

export function Login({userName, authState, onAuthChange}) {
  return (
    <main>
      <h1>Try to be a Memory Master</h1>
      {authState === AuthState.Unauthenticated && (
        <Unauthenticated userName={userName} onLogin={(loginUserName) => {
          onAuthChange(loginUserName, AuthState.Authenticated)
        }}
        />
      )}
    </main>
  );
}