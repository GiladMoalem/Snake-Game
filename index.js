import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection, getSnakeSize } from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";

const game_board = document.getElementById('game-board');
const clock = document.getElementById("clock");
let game_over = false;

let start_time = Date.now();
let last_render_time = 0;

function main(current_time){
    if(game_over) {
        return alert(`GAME OVER\nSCORE:  ${getSnakeSize()}\nTime passed: ${getSecondsPassed()}\nspeed: ${SNAKE_SPEED}`);    
    }
    const seconds_since_last_time = (current_time - last_render_time) / 1000;
    window.requestAnimationFrame(main);

    updateClock();

    if(seconds_since_last_time < 1 / SNAKE_SPEED) return;
    last_render_time = current_time;
    update();
    draw();
}

window.requestAnimationFrame(main);

function update(){
    updateSnake();
    updateFood();
    checkDeath()
}
function draw(){
    drawSnake(game_board);
    drawFood(game_board);
}

function checkDeath(){
    game_over = outsideGrid(getSnakeHead()) || snakeIntersection();
}

function updateClock(){
    let secondsPassed = getSecondsPassed();
    let minutes = Math.floor(secondsPassed / 60);
    let sec = secondsPassed % 60;
    if(minutes < 10){
        minutes = '0' + minutes;
    }
    if(sec <10){
        sec = '0' + sec;
    }
    clock.innerText = `Time:   ${minutes}:${sec}`;
}

function getSecondsPassed(){
    return Math.floor((Date.now() - start_time) / 1000 );
}