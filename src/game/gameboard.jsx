import React from 'react'

export function GameBoard(props) {
    const userName = props.userName;
    const [score, setScore] = React.useState(null)
    const [cards, setCards] = React.useState([]);
    const [inGame, setInGame] = React.useState(false);

    {/* This is where I shuffle my array
        I am using the Fisher-Yates shuffle.
        I hope it helps remove some interal bias */}
    function shuffle(array) {
        let i = array.length;
        let r;

        while (i !== 0) {
            r = Math.floor(Math.random() * i);
            i--;

            [array[i], array[r] = [array[r], array[i]]];
        }

        return array;
    }

    function placeCards() {
        const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const allValues = [...values, ...values];

        let shuffled = shuffle(allValues);
        let cardSet = shuffled.map((value, index) => ({
            id: index,
            value: value,
            flipped: false,
            matched: false
        }));
        return cardSet;
    }

    function newGame() {
        setScore(0)
        setInGame(true)
        setCards(() => placeCards())
    }

    return (
        <section className="gameboard">
        <div className='gameData'>{userName}</div>
        <div className='gameData'>Score: {score}</div>
        <table>
          <tbody>
          <tr>
            <td><button disabled={!inGame}>MM</button></td>
            <td><button disabled={!inGame}>MM</button></td>
            <td><button disabled={!inGame}>MM</button></td>
            <td><button disabled={!inGame}>MM</button></td>
            <td><button disabled={!inGame}>MM</button></td>
          </tr>
          <tr>
            <td><button disabled={!inGame}>MM</button></td>
            <td><button disabled={!inGame}>MM</button></td>
            <td><button disabled={!inGame}>MM</button></td>
            <td><button disabled={!inGame}>MM</button></td>
            <td><button disabled={!inGame}>MM</button></td>
          </tr>
          <tr>
            <td><button disabled={!inGame}>MM</button></td>
            <td><button disabled={!inGame}>MM</button></td>
            <td><button disabled={!inGame}>MM</button></td>
            <td><button disabled={!inGame}>MM</button></td>
            <td><button disabled={!inGame}>MM</button></td>
          </tr>
          <tr>
            <td><button disabled={!inGame}>MM</button></td>
            <td><button disabled={!inGame}>MM</button></td>
            <td><button disabled={!inGame}>MM</button></td>
            <td><button disabled={!inGame}>MM</button></td>
            <td><button disabled={!inGame}>MM</button></td>
          </tr>
          </tbody>
        </table>
        <div>
        <button className="newGame" onClick={newGame}>New Game</button>
        </div>
        {console.log(cards)}
      </section>
    ); 
}