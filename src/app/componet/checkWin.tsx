type TBoard = (string | null)[];
export const CheckWinner = (
  board: TBoard,
  size: number,
  consecutiveCount: number,
  symbol: string
): boolean => {
  const checkConsecutive = (start: number, step: number): boolean => {
    let count = 0;
    for (let i = start; i < board.length; i += step) {
      if (board[i] === symbol) {
        count++;
        if (count === consecutiveCount) {
          return true;
        }
      } else {
        count = 0;
      }
    }
    return false;
  };

  // Kiểm tra theo dòng
  for (let i = 0; i < size; i++) {
    if (checkConsecutive(i * size, 1)) {
      return true;
    }
  }

  // Kiểm tra theo cột
  for (let i = 0; i < size; i++) {
    if (checkConsecutive(i, size)) {
      return true;
    }
  }

  // Kiểm tra đường chéo chính
  if (checkConsecutive(0, size + 1)) {
    return true;
  }

  // Kiểm tra đường chéo phụ
  if (checkConsecutive(size - 1, size - 1)) {
    return true;
  }

  return false;
};
