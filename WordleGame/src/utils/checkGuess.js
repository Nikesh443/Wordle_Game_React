
export function checkGuess(guess, answer) {
  const guessLetters = guess.split('');
  const answerLetters = answer.split('');

  const result = guessLetters.map((letter) => ({ letter, status: 'absent' }));


  // Build a count of each letter in the answer. e.g. "apple" -> { a:1, p:2, l:1, e:1 }
  const letterCounts = {};
  for (const letter of answerLetters) {
    letterCounts[letter] = (letterCounts[letter] || 0) + 1;
  }

  // ---- PASS 1: find the GREENS (correct letter AND correct position). -------
  for (let i = 0; i < guessLetters.length; i++) {
    if (guessLetters[i] === answerLetters[i]) {
      result[i].status = 'correct';
      // This letter is now "claimed", so reduce how many are available.
      letterCounts[guessLetters[i]]--;
    }
  }

  // ---- PASS 2: find the YELLOWS (right letter, wrong spot). -----------------
  for (let i = 0; i < guessLetters.length; i++) {
    // Skip letters we already coloured green in pass 1.
    if (result[i].status === 'correct') continue;

    const letter = guessLetters[i];

    if (letterCounts[letter] > 0) {
      result[i].status = 'present';
      letterCounts[letter]--; // claim one, so later duplicates can't reuse it.
    }
  }

  return result;
}
