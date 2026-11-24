
const KEY_ROWS = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace'],
];

export default function Keyboard({ usedKeys, onKeyPress }) {
  return (
    <div className="keyboard">
      {KEY_ROWS.map((row, rowIndex) => (
        <div className="keyboard-row" key={rowIndex}>
          {row.map((key) => {
            // Look up the colour this letter has earned so far (may be undefined).
            const status = usedKeys[key];

            // Build the class list: base "key", any earned colour, and a "wide"
            // modifier for the two big action keys.
            const isAction = key === 'Enter' || key === 'Backspace';
            const className = [
              'key',
              status || '',
              isAction ? 'wide' : '',
            ]
              .join(' ')
              .trim();

            return (
              <button
                key={key}
                className={className}
                // Clicking a key calls the same handler as the real keyboard.
                onClick={() => onKeyPress(key)}
              >
                {key === 'Backspace' ? '⌫' : key}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
