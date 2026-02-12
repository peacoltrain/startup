import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Game } from './game/game';
import { Scores } from './scores/scores';
import { About } from './about/about';


export default function App() {
  return (
    <BrowserRouter>
        <header>
        <nav className="navbar fixed-top navbar-dark">
            <div className="navbar-brand">Memory Master</div>
            <menu className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="">Login</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="game">Play</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="scores">Scores</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="about">About</NavLink>
            </li>
            </menu>
        </nav>
        </header>

        <Routes>
            <Route path='/' element={<Login />} exact />
            <Route path='/game' element={<Game />} />
            <Route path='/scores' element={<Scores />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
        </Routes>

        <footer>
        <hr />
        <span className="text-reset">Author -- Isaac Keenan</span>
        <br />
        <a href="https://github.com/peacoltrain/startup.git">Memory Github</a>
        </footer>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}