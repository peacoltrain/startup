import React from 'react';

export function Sidebar() {
    const [notifications, setNotifications] = React.useState([]);

    {/* This is where I will define the parts of the randomoly generated
        notifications */}
    const names = [
        "Jack", "Jill", 'Bruce', 'Lee', 'Omni'
    ];

    const actions = [
        "scored",
        "started a new game",
        "scored 24"
    ];

    function createNotification() {
        let name = names[Math.floor(Math.random() * names.length)]
        let action = actions[Math.floor(Math.random() * actions.length)]
        if (action === "scored") {
            let value = Math.floor(Math.random() * 28) + 12
            action = `${action} ${value}`;
        }
        return `${name} ${action}`;
    }

    React.useEffect(() => {
        let timer;

        function newNoti() {
            const delay = Math.random() * 8000 + 7000;

            timer = setTimeout(() => {
            const newNotification = createNotification();

            setNotifications(prev =>
                [newNotification, ...prev].slice(0, 8)
            );

            newNoti();
        }, delay);
        }

        newNoti()

        return () => clearTimeout(timer);
    }, []);


    return (
        <section className="sidebar">
            <div className="websocket">Notifications:</div>
            {notifications.map((note) => (
                <div>{note}</div>
            ))}
      </section>
    );
}