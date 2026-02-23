import React from 'react';
import './game.css'

export function Game() {
  return (
    <main id="main_game">
      <section className="sidebar">
        <div className="players">
          Player:
          <span className="player-name">Player Name</span>
        </div>
        <div className="turns">
          Turn:
          <span className="player-turns">13</span>
        </div>
        <br />
        <div className="websocket">Notifications:
        <p>Jace has requested to play a game with you.</p></div>
      </section>
      <section className="gameboard">
        <table>
          <tbody>
          <tr>
            <td>
              <button>
                MM
              </button>
            </td>
            <td>
              <button>
                MM
              </button>
            </td>
            <td>
              <button>
                MM
              </button>
            </td>
            <td>
              <button>
                MM
              </button>
            </td>
            <td>
              <button>
                MM
              </button>
            </td>
          </tr>
                    <tr>
            <td>
              <button>
                MM
              </button>
            </td>
            <td>
              <button>
                MM
              </button>
            </td>
            <td>
              <button>
                MM
              </button>
            </td>
            <td>
              <button>
                MM
              </button>
            </td>
            <td>
              <button>
                MM
              </button>
            </td>
          </tr>
                    <tr>
            <td>
              <button>
                MM
              </button>
            </td>
            <td>
              <button>
                MM
              </button>
            </td>
            <td>
              <button>
                MM
              </button>
            </td>
            <td>
              <button>
                MM
              </button>
            </td>
            <td>
              <button>
                MM
              </button>
            </td>
          </tr>
                    <tr>
            <td>
              <button>
                MM
              </button>
            </td>
            <td>
              <button>
                MM
              </button>
            </td>
            <td>
              <button>
                MM
              </button>
            </td>
            <td>
              <button>
                MM
              </button>
            </td>
            <td>
              <button>
                MM
              </button>
            </td>
          </tr>
                    <tr>
            <td>
              <button>
                MM
              </button>
            </td>
            <td>
              <button>
                MM
              </button>
            </td>
            <td>
              <button>
                MM
              </button>
            </td>
            <td>
              <button>
                MM
              </button>
            </td>
            <td>
              <button>
                MM
              </button>
            </td>
          </tr>
          </tbody>
        </table>
        <div>
        <button className="newGame">New Game</button>
        </div>
      </section>
    </main>
  );
}