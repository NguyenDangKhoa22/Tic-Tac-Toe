type TCeilValue = string | null;
type TBoard = TCeilValue[];

export const CheckWin = (
  squares: TBoard,
  size: number,
  winLength: number
): TCeilValue => {
  const checkLine = (indices: number[]): TCeilValue => {
    const firstSquareValue = squares[indices[0]];
    if (!firstSquareValue) {
      return null;
    }

    for (let i = 1; i < indices.length; i++) {
      if (squares[indices[i]] !== firstSquareValue) {
        return null;
      }
    }

    return firstSquareValue;
  };

  const checkLines = (lines: number[][]): TCeilValue => {
    for (const indices of lines) {
      const winner = checkLine(indices);
      if (winner) {
        return winner;
      }
    }
    return null;
  };

  // Check each line for a win
  for (let row = 0; row < size; row++) {
    for (let col = 0; col <= size - winLength; col++) {
      const horizontalIndices = Array.from(
        { length: winLength },
        (_, i) => row * size + col + i
      );
      const winner = checkLine(horizontalIndices);
      if (winner) {
        return winner;
      }
    }
  }

  for (let col = 0; col < size; col++) {
    for (let row = 0; row <= size - winLength; row++) {
      const verticalIndices = Array.from(
        { length: winLength },
        (_, i) => (row + i) * size + col
      );
      const winner = checkLine(verticalIndices);
      if (winner) {
        return winner;
      }
    }
  }

  const diagonalLines: number[][] = [];
  const antiDiagonalLines: number[][] = [];

  for (let row = 0; row <= size - winLength; row++) {
    for (let col = 0; col <= size - winLength; col++) {
      const diagonalIndices = Array.from(
        { length: winLength },
        (_, i) => (row + i) * size + col + i
      );
      const antiDiagonalIndices = Array.from(
        { length: winLength },
        (_, i) => (row + i) * size + col + winLength - 1 - i
      );

      diagonalLines.push(diagonalIndices);
      antiDiagonalLines.push(antiDiagonalIndices);
    }
  }

  const winnerDiagonal = checkLines(diagonalLines);
  if (winnerDiagonal) {
    return winnerDiagonal;
  }

  const winnerAntiDiagonal = checkLines(antiDiagonalLines);
  if (winnerAntiDiagonal) {
    return winnerAntiDiagonal;
  }

  return null; // No winner yet
};
