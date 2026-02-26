import React from 'react'

export function GameBoard(props) {
    const userName = props.userName;
    const [score, setScore] = React.useState(null)
    const [cards, setCards] = React.useState(placeCards([null, null, null, null, null, null, null, null, null, null]));
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

            [array[i], array[r]] = [array[r], array[i]];
        }
        return array;
    }

    function placeCards(values) {
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

    function cardFlip(cardId) {
        setCards(prevCards =>
            prevCards.map(card =>
                card.id === cardId
                    ? { ...card, flipped: true }
                    : card
            )
        );
    }

    function newGame() {
        setScore(0)
        setInGame(true)
        setCards(() => placeCards([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
    }

    return (
        <section className="gameboard">
        <div className='gameData'>{userName}</div>
        <div className='gameData'>Score: {score}</div>
        <table>
          <tbody>
          <tr>
            <td><button disabled={!inGame} onClick={() => cardFlip(0)}>{cards[0].flipped ? cards[0].value : 'MM'}</button></td>
            <td><button disabled={!inGame} onClick={() => cardFlip(1)}>MM</button></td>
            <td><button disabled={!inGame} onClick={() => cardFlip(2)}>MM</button></td>
            <td><button disabled={!inGame} onClick={() => cardFlip(3)}>MM</button></td>
            <td><button disabled={!inGame} onClick={() => cardFlip(4)}>MM</button></td>
          </tr>
          <tr>
            <td><button disabled={!inGame} onClick={() => cardFlip(5)}>MM</button></td>
            <td><button disabled={!inGame} onClick={() => cardFlip(6)}>MM</button></td>
            <td><button disabled={!inGame} onClick={() => cardFlip(7)}>MM</button></td>
            <td><button disabled={!inGame} onClick={() => cardFlip(8)}>MM</button></td>
            <td><button disabled={!inGame} onClick={() => cardFlip(9)}>MM</button></td>
          </tr>
          <tr>
            <td><button disabled={!inGame} onClick={() => cardFlip(10)}>MM</button></td>
            <td><button disabled={!inGame} onClick={() => cardFlip(11)}>MM</button></td>
            <td><button disabled={!inGame} onClick={() => cardFlip(12)}>MM</button></td>
            <td><button disabled={!inGame} onClick={() => cardFlip(13)}>MM</button></td>
            <td><button disabled={!inGame} onClick={() => cardFlip(14)}>MM</button></td>
          </tr>
          <tr>
            <td><button disabled={!inGame} onClick={() => cardFlip(15)}>MM</button></td>
            <td><button disabled={!inGame} onClick={() => cardFlip(16)}>MM</button></td>
            <td><button disabled={!inGame} onClick={() => cardFlip(17)}>MM</button></td>
            <td><button disabled={!inGame} onClick={() => cardFlip(18)}>MM</button></td>
            <td><button disabled={!inGame} onClick={() => cardFlip(19)}>MM</button></td>
          </tr>
          </tbody>
        </table>
        <div>
        <button className="newGame" onClick={newGame}>New Game</button>
        </div>
      </section>
    ); 
}