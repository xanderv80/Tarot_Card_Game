import "./styles.css";
import Card from "./card";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(0, 0, 800, 600);

let card = new Card(GAME_WIDTH, GAME_HEIGHT);

card.draw(ctx);
