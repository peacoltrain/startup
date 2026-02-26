import React from 'react'

export function GameBoard(props) {
    const userName = props.userName;
    const [score, setScore] = React.useState(null)
    const [cards, setCards] = React.useState(placeCards([null, null, null, null, null, null, null, null, null, null]));
    const [locked, setLock] = React.useState(true);
    const [firstFlipp, setFirstFlipp] = React.useState(null);
    const [pairs, setPairs] = React.useState(0);

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

    function saveGame(pairsFound) {
        if (pairsFound !== 10) return;

        const scoreEntry = {
            name: userName,
            score: score,
            date: new Date().toLocaleDateString()
        };

        // Get existing scores
        const scoresText = localStorage.getItem('scores');
        let scores = [];

        if (scoresText) {
            scores = JSON.parse(scoresText);
        }

        scores.push(scoreEntry);
        scores = scores.slice(0, 10);
        localStorage.setItem('scores', JSON.stringify(scores));
        console.log("Score saved:", scoreEntry);
    }

    function match(flippedCard) {
        console.log("Match successfully loaded!")
        {console.log(firstFlipp)}
        {console.log(flippedCard)}

        setTimeout(() => {
            /*If the cards are a match increase score by one, clear first and second card.*/
            if (firstFlipp.value === flippedCard.value){
                console.log("Matchfound!");
                matchCard([firstFlipp.id, flippedCard.id])
                setFirstFlipp(null);
                setScore(oldScore => oldScore +1);
                setPairs(prev => {
                    const newPairs = prev + 1;
                    console.log("Pairs:", newPairs);

                    if (newPairs === 10) {
                        console.log("Game Over!");
                        saveGame(newPairs);
                    }

                    return newPairs;
                });
            } else { /*If not match, make cards unflipped, clear first and second card, increase score by one*/
                console.log("No Match");
                flipCard([firstFlipp.id, flippedCard.id]);
                setFirstFlipp(null);
                setScore(oldScore => oldScore +1);
            }

            setLock(false);
        }, 3000);
    }

    function matchCard(matchedIDs) {
        setCards(prevCards =>
            prevCards.map(card =>
                matchedIDs.includes(card.id) ? { ...card, matched: true} : card
            )
        );
    }

    function flipCard(flippedCardsIDs) {
        setCards(prevCards =>
            prevCards.map(card =>
                flippedCardsIDs.includes(card.id) ? { ...card, flipped: !card.flipped } : card
            )
        );
    }

    function pick(flippedCard) {
        flipCard([flippedCard.id])


        if (firstFlipp === null) {
            setFirstFlipp(flippedCard);
            return;
        }

        setLock(true)
        match(flippedCard);
    }

    function newGame() {
        setPairs(0);
        setFirstFlipp(null);
        setScore(0)
        setLock(false)
        setCards(() => placeCards([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
    }

    return (
        <section className="gameboard">
        <div className='gameData'>{userName}</div>
        <div className='gameData'>Score: {score}</div>
        <table>
          <tbody>
            {[0,1,2,3].map(row => (
                <tr>
                    {cards.slice(row * 5,(row * 5) + 5).map(card => (
                        <td>
                            <button
                            disabled={locked || card.matched || card.flipped}
                            onClick={() => pick(card)}
                            >
                            {card.flipped ? card.value : 'MM'}
                            </button>
                        </td>
                    ))}
                </tr>
            ))}
          </tbody>
        </table>
        <div>
        <button className="newGame" onClick={newGame}>New Game</button>
        </div>
      </section>
    ); 
}