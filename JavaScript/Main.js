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

function init() {
    InitFileRank();
}