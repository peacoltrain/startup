import React from 'react';

export function Sidebar() {
    const [notifications, setNotifications] = React.useState([]);

    {/* This is where I will define the parts of the randomoly generated
        notifications */}
    const names = [
        "Jack", "Jill", 'Bruce', 'Lee', 'Omni'
    ];

    const actions = [
        "scored a perfect 12!",
        "scored 32",
        "started a new game",
        "scored 24"
    ];




    return (
        <section className="sidebar">
            <div className="websocket">Notifications:</div>
            <div>This is a placeholder until random elements can be generated</div>
      </section>
    );
}