var GameBoard = {};

GameBoard.pieces = new Array(BOARD_SQUARES);
GameBoard.side = COLS.WHITE;
// Used to determine whether a draw should occur after 50 moves have been played without
// a pawn being taken
GameBoard.tieFiftyMove = 0;
GameBoard.histCount = 0;
GameBoard.castleCheck = 0;
GameBoard.material = new Array(2);
// The number of pieces of a particular type on the board currently; indexed by PIECE
GameBoard.pieceNum = new Array(13);
GameBoard.pieceArr = new Array(140)
GameBoard.enPass = 0;
// Unique position key (see how this is hashed by looking at randKey() in Definitions.js
GameBoard.posKey = 0;

function posKey() {
    var finalPosKey = 0;
    var pieces = PIECE.EMPTY;

    for (i = 0; i < BOARD_SQUARES; ++i) {
        pieces = GameBoard.pieces[i];
        if (pieces != PIECE.EMPTY && pieces != KEY_SQ.OFF) {
            finalPosKey ^= pieceKeys[120 * pieces + i];
        }
    }
    if (GameBoard.side == COLS.WHITE) {
        finalPosKey ^= sideKey;
    }
    if (GameBoard.enPass != KEY_SQ.NO_SQ) {
        finalPosKey ^= pieceKeys[GameBoard.enPass];
    }

    finalPosKey ^= castleKeys[GameBoard.castleCheck];
    return finalPosKey;
}

function ResetBoard() {
    for (i = 0; i < BOARD_SQUARES; ++i) {
        GameBoard.pieces[i] = KEY_SQ.OFF;
    }
    for (i = 0; i < 64; ++i) {
        GameBoard.pieces[S120(i)] = PIECE.EMPTY;
    }

    GameBoard.side = COLS.BOTH;
    GameBoard.enPass = KEY_SQ.NO_SQ;
    GameBoard.tieFiftyMove = 0;
    GameBoard.histCount = 0;
    GameBoard.castleCheck = 0;
    GameBoard.posKey = 0;
}


