

import Row from './Row';
import { MAX_TURNS } from '../hooks/useWordle';

export default function Board({ guesses, currentGuess, turn }) {
  return (
    <div className="board">
      {/* Build an array of 6 rows and render a <Row /> for each. */}
      {Array.from({ length: MAX_TURNS }).map((_, index) => {
        // Is THIS row the one the player is actively typing in right now?
        const isCurrentRow = index === turn;

        return (
          <Row
            key={index}
            // The already-submitted guess for this row (or null if not yet played).
            guess={guesses[index]}
            // Only the active row receives the live `currentGuess` text.
            // Every other row receives null, so it shows blanks or its colours.
            currentGuess={isCurrentRow ? currentGuess : null}
          />
        );
      })}
    </div>
  );
}
