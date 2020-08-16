const PIECE = {
    EMPTY: 0, wP: 1, wN: 2, wB: 3, wR: 4, wQ: 5, wK: 6,
    bP: 7, bN: 8, bB: 9, bR: 10, bQ: 11, bK: 12
}

const BOARD_SQUARES = 120;

const RANK = {
    RANK_1: 0, RANK_2: 1, RANK_3: 2, RANK_4: 3, RANK_5: 4,
    RANK_6: 5, RANK_7: 6, RANK_8: 7, RANK_N: 8
}

const FILE = {
    FILE_A: 0, FILE_B: 1, FILE_C: 2, FILE_D: 3, FILE_E: 4,
    FILE_F: 5, FILE_G: 6, FILE_H: 7, FILE_N: 8
}

const COLS = {
    WHITE: 0, BLACK: 1, BOTH: 2
}

const KEY_SQ = {
    A1: 21, B1: 22, C1: 23, D1: 24, E1: 25, F1: 26, G1: 27, H1: 28,
    A8: 91, B8: 92, C8: 93, D8: 94, E8: 95, F8: 96, G8: 97, H8: 98,
    NO_SQ: 99, OFF: 100
};

const CAN_CASTLE = {
    WQ: 1, WK: 2, BQ: 4, BK: 8
}

// Arrays that contain the actual file and rank designations (from 0 - 7)
var FileID = new Array(BOARD_SQUARES);
var RankID = new Array(BOARD_SQUARES);

// Function to return the file, rank given a position on the 120 bit grid
function FileRankRes(f, r) {
    return (f + 21 + 10 * r)
}

const nonPawn = [false, false, true, true, true, true, true, false, true, true, true, true, true];
const rkq = [false, false, false, false, true, true, true, false, false, false, true, true, true];
const bn = [false, false, true, true, false, false, false, false, true, true, false, false, false];

// Using Stockfish endgame values for piece worth
const valPiece = [0, 100, 416, 441, 663, 1292, 1000000, 100, 416, 441, 663, 1292, 1000000];

const colPiece = [COLS.BOTH, COLS.WHITE, COLS.WHITE, COLS.WHITE, COLS.WHITE, COLS.WHITE, COLS.WHITE,
    COLS.BLACK, COLS.BLACK, COLS.BLACK, COLS.BLACK, COLS.BLACK, COLS.BLACK];
const PiecePawn = [false, true, false, false, false, false, false, true, false, false, false, false, false];
const PieceKnight = [false, false, true, false, false, false, false, false, true, false, false, false, false];
const PieceKing = [false, false, false, false, false, false, true, false, false, false, false, false, true];
const PieceRQ = [false, false, false, false, true, true, false, false, false, false, true, true, false];
const PieceBQ = [false, false, false, true, false, true, false, false, false, true, false, true, false];
const PieceSlides = [false, false, false, true, true, true, false, false, false, true, true, true, false];

function randKey() {
    return (Math.floor((Math.random()*255)+1)<<23) | (Math.floor((Math.random()*255)+1)<<16)
        | (Math.floor((Math.random()*255)+1)<<8) | Math.floor((Math.random()*255)+1);
}

var pieceKeys = new Array(1680);
var sideKey;
var castleKeys = new Array(16);

var Swap120To64 = new Array(120);
var Swap64To120 = new Array(64);

function S64(item) {
    return Swap120To64[(item)];
}

function S120(item) {
    return Swap64To120[(item)];
}