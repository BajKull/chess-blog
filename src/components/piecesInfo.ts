import pawn from "../data/svg/pawn.svg";
import knight from "../data/svg/knight.svg";
import bishop from "../data/svg/bishop.svg";
import rook from "../data/svg/rook.svg";
import queen from "../data/svg/queen.svg";
import king from "../data/svg/king.svg";

const piecesInfo = [
  {
    name: "pawn",
    img: pawn,
    desc:
      "The most basic and least powerful figure. Each player starts with 8 of them.",
  },
  {
    name: "knight",
    img: knight,
    desc:
      "Knights provides unique movement pattern which gives you opportunities for unusual plays.",
  },
  {
    name: "bishop",
    img: bishop,
    desc:
      "Bishops has diagonal movement that provides controll across the board.",
  },
  {
    name: "rook",
    img: rook,
    desc:
      "Rooks move in straight line and are most powerful towards the end of a game.",
  },
  {
    name: "queen",
    img: queen,
    desc:
      "The queen is the most powerful piece in the game. Moves like bishop and rook combined.",
  },
  {
    name: "king",
    img: king,
    desc: "The most important piece on the board. Protect it at all cost.",
  },
];

export { piecesInfo };
