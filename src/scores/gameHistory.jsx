import React from 'react';

export function GameHistory() {
    const [scores, setScores] = React.useState([]);

    // Demonstrates calling a service asynchronously so that
    // React can properly update state objects with the results.
    React.useEffect(() => {
        fetch('/api/scores')
            .then(res => res.json())
            .then(scores => setScores(scores));
    }, []);

    // Demonstrates rendering an array with React
    const scoreRows = [];
    if (scores.length) {
        for (const [i, score] of scores.entries()) {
        scoreRows.push(
            <tr key={i}>
            <td>{i}</td>
            <td>{score.name}</td>
            <td>{score.score}</td>
            <td>{score.date}</td>
            </tr>
        );
        }
    }

    return (
    <table>
        <thead>
            <tr>
            <th>Name</th>
            <th>Turns</th>
            <th>Date</th>
            </tr>
        </thead>
        <tbody>{scoreRows}</tbody>
    </table>
    );
}