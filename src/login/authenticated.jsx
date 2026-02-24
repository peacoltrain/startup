import React from 'react'

export function Authenticated(props) {

    function logout() {
        localStorage.removeItem('userName');
        props.onLogout();
    }

    return (
        <div>
            <div>You are logged in as {props.userName}</div>
            <button onClick={logout}>Logout</button>
        </div>
    );
}