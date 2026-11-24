export const WORDS = [
  'apple',
  'brave',
  'crane',
  'drink',
  'eagle',
  'flame',
  'grape',
  'house',
  'input',
  'joker',
  'knife',
  'lemon',
  'mango',
  'night',
  'ocean',
  'pilot',
  'queen',
  'river',
  'stone',
  'tiger',
  'unity',
  'vivid',
  'water',
  'xenon',
  'yacht',
  'zebra',
];

/**
 * Pick a random word from the WORDS list to be the secret answer.
 *
 * Math.random()            -> a decimal between 0 and 1 (e.g. 0.42)
 * * WORDS.length           -> scale it up to the size of our list
 * Math.floor(...)          -> round down to a whole number index (0, 1, 2, ...)
 *
 * @returns {string} a single random 5-letter word, e.g. "crane"
 */
export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * WORDS.length);
  return WORDS[randomIndex];
}
