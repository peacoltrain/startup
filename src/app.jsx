import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div>
        <header>
        <nav className="navbar fixed-top navbar-dark">
            <a className="navbar-brand" href="#">Memory Master</a>
            <menu className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link active" href="index.html">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="game.html">Play</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="scores.html">Scores</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="about.html">About</a>
            </li>
            </menu>
        </nav>
        </header>

        <main>
        <p>This is placeholder for main</p>
        </main>

        <footer>
        <hr />
        <span className="text-reset">Author -- Isaac Keenan</span>
        <br />
        <a href="https://github.com/peacoltrain/startup.git">Memory Github</a>
        </footer>
    </div>
  );
}