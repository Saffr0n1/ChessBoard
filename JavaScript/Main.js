$(function () {
    init();
});

// First, we want all off-board squares to be labeled as such
// Then, we want our 64 board squares to get their file, rank initialized
function InitFileRank() {
    for (i = 0; i < BOARD_SQUARES; ++i) {
        FileID[i] = KEY_SQ.OFF;
        RankID[i] = KEY_SQ.OFF;
    }

    for (r = RANK.RANK_1; r <= RANK.RANK_8; ++r) {
        for (f = FILE.FILE_1; f <= FILE.FILE_8; ++f) {
            sq = FileRankRes(f, r);
            FileID[sq] = f;
            RankID[sq] = r;
        }
    }
}

function InitHashKeys() {
    for (i = 0; i < 1680; ++i) {
        pieceKeys[i] = randKey();
    }
    for (i = 0; i < 16; ++i) {
        castleKeys[i] = randKey();
    }
    sideKey = randKey();
}

function InitSizeSwap() {
    let sq64 = 0;
    for (i = 0; i < BOARD_SQUARES; ++i) {
        Swap120To64[i] = 999;
    }
    for (i = 0; i < 64; ++i) {
        Swap64To120[i] = 999;
    }

    for (r = RANK.RANK_1; r <= RANK.RANK_8; ++r) {
        for (f = FILE.FILE_A; f <= FILE.FILE_H; ++f) {
            s = FileRankRes(f, r);
            Swap64To120[sq64] = s;
            Swap120To64[s] = sq64;
            sq64++;
        }
    }
}

function init() {
    InitFileRank();
    InitHashKeys();
    InitSizeSwap();
}