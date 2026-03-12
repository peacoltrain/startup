import React from 'react'

export function Authenticated(props) {

    function logout() {
        fetch(`/api/auth/logout`, {
            method: 'delete',
        })
            .catch(() => {
            // Logout failed. Assuming offline
            })
            .finally(() => {
            localStorage.removeItem('userName');
            props.onLogout();
            });
        }

    return (
        <div>
            <div>You are logged in as {props.userName}</div>
            <button onClick={logout}>Logout</button>
        </div>
    );
}