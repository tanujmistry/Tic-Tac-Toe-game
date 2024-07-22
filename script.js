const cells = document.querySelectorAll('.cell');
const resetBtn = document.getElementById('resetBtn');
let currentPlayer = 'X', board = Array(9).fill('');

const winCombos = [
  [0, 1, 2], [3, 4, 5],
  [6, 7, 8], [0, 3, 6],
  [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

const checkWin = player => winCombos.some(combo => combo.every(i => board[i] === player));
const checkDraw = () => board.every(cell => cell);

cells.forEach((cell, i) => cell.addEventListener('click', () => {
  if (cell.textContent || checkWin('X') || checkWin('O')) return;
  cell.textContent = currentPlayer;
  board[i] = currentPlayer;
  if (checkWin(currentPlayer)) alert(`${currentPlayer} wins!`);
  else if (checkDraw()) alert('It\'s a draw!');
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}));

resetBtn.addEventListener('click', () => {
  board.fill('');
  cells.forEach(cell => cell.textContent = '');
  currentPlayer = 'X';
});
