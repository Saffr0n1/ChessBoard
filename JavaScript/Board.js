var GameBoard = {};

GameBoard.pieces = new Array(BOARD_SQUARES);
GameBoard.side = COLS.WHITE;
// Used to determine whether a draw should occur after 50 moves have been played without
// a pawn being taken
GameBoard.tieFiftyMove = 0;
GameBoard.histCount = 0;
GameBoard.castleCheck = 0;
GameBoard.material = new Array(2);