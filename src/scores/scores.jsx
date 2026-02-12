import React from 'react';
import './scores.css'

export function Scores() {
  return (
    <main>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Turns</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Jeff Smith</td>
            <td>34</td>
            <td>Jan 27, 2026</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Angela Jenkins</td>
            <td>20</td>
            <td>Feb 3, 2026</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Maddox Cook</td>
            <td>52</td>
            <td>Mar 23, 2026</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}