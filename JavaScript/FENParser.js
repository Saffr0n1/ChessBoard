function translateFEN(fen) {
    ResetBoard();

    let c = 0;
    let piece = 0;
    let SQ120 = 0;
    let fC = 0;
    let r = RANK.RANK_8;
    let f = FILE.FILE_A;

    while (r >= RANK.RANK_1 && fC < fen.length) {
        c = 1;
        switch (fen[fC]) {
            case 'p': piece = PIECE.bP; break;
            case 'n': piece = PIECE.bN; break;
            case 'b': piece = PIECE.bB; break;
            case 'r': piece = PIECE.bR; break;
            case 'k': piece = PIECE.bK; break;
            case 'q': piece = PIECE.bQ; break;
            case 'P': piece = PIECE.wP; break;
            case 'N': piece = PIECE.wN; break;
            case 'B': piece = PIECE.wB; break;
            case 'R': piece = PIECE.wR; break;
            case 'K': piece = PIECE.wK; break;
            case 'Q': piece = PIECE.wQ; break;

            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
                piece = PIECE.EMPTY;
                c = Number(fen[fC]);
                break;

            case '/':
            case ' ':
                r--;
                f = FILE.FILE_A;
                fC++;
                continue;
            default:
                console.log("ERROR PARSING FEN STRING");
                return;
        }

        for (i = 0; i < c; ++i) {
            SQ120 = FileRankRes(f,r);
            GameBoard.pieces[SQ120] = piece;
            f++;
        }
        fC++;
    }

    GameBoard.side = (fen[fC] === 'w') ? COLS.WHITE : COLS.BLACK;
    fC += 2;

    for (i = 0; i < 4; i++) {
        if (fen[fC] === ' ') {
            break;
        }
        switch(fen[fC]) {
			case 'K': GameBoard.castleCheck |= CAN_CASTLE.WK; break;
			case 'Q': GameBoard.castleCheck |= CAN_CASTLE.WQ; break;
			case 'k': GameBoard.castleCheck |= CAN_CASTLE.BK; break;
			case 'q': GameBoard.castleCheck |= CAN_CASTLE.BQ; break;
            default:
                break;
        }
		fC++;
    }
    fC++;

    if (fen[fC] !== '-') {
        f = fen[fC].charCodeAt() - 'a'.charCodeAt();
		r = fen[fC + 1].charCodeAt() - '1'.charCodeAt();
		GameBoard.enPass = FileRankRes(f,r);
    }

    GameBoard.posKey = posKey();
}