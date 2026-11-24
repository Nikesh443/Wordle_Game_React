

import Tile from './Tile';
import { WORD_LENGTH } from '../hooks/useWordle';

export default function Row({ guess, currentGuess }) {
  // CASE 1: This row has already been submitted.
  // `guess` is an array of { letter, status } objects from checkGuess().
  if (guess) {
    return (
      <div className="row">
        {guess.map((item, index) => (
          // `key` helps React tell list items apart. Using the index is fine
          // here because the tiles never get reordered.
          <Tile key={index} letter={item.letter} status={item.status} />
        ))}
      </div>
    );
  }

  if (currentGuess != null) {
    const letters = currentGuess.split('');

    return (
      <div className="row">
        {/* Create an array of length 5 to guarantee exactly 5 tiles. */}
        {Array.from({ length: WORD_LENGTH }).map((_, index) => (
          <Tile key={index} letter={letters[index] || ''} />
        ))}
      </div>
    );
  }

  // CASE 3: A future, empty row — just 5 blank tiles.
  return (
    <div className="row">
      {Array.from({ length: WORD_LENGTH }).map((_, index) => (
        <Tile key={index} letter="" />
      ))}
    </div>
  );
}
