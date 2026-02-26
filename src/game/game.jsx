import React from 'react';
import './game.css'
import { Sidebar } from './sidebar';
import { GameBoard } from './gameboard';

export function Game(props) {
  return (
    <main id="main_game">
      <Sidebar/>
      <GameBoard userName={props.userName} />
    </main>
  );
}