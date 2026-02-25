import React from 'react';

export function Sidebar() {
    const [notifications, setNotifications] = useState([]);

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
}