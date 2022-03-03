export let SNAKE_SPEED = 5;
let snake = [{x:11, y:11}];
let newSegment = 0;

import {move} from './input.js';

export function update(){
    SNAKE_SPEED = 5 + (snake.length / 5) ;
    if(move.x == 0 && move.y == 0) return;
    addSegment(newSegment);
    for (let index = snake.length -2; index >= 0 ; index--) {
        snake[index + 1] = {...snake[index]}
    }
    snake[0].x += move.x;
    snake[0].y += move.y;
}

export  function draw(game_board){
    game_board.innerHTML =''; //clean the page

    snake.forEach(element => {
        const snake_element = document.createElement("div");
        snake_element.className = "snake";
        snake_element.style.gridColumnStart = element.x;
        snake_element.style.gridRowStart = element.y;

        game_board.appendChild(snake_element);
    });
}
export function onSnake(food_positin,{ignoreHead = false} = {}){
    console.log(snake.length);
    return snake.some((element, index) =>{
        if(ignoreHead && index === 0) return false;
        return isEqualPositions(element, food_positin);
    });
}
export function feed_snake(amount){
    newSegment += amount;
}

function addSegment(feed_number){
    //increase the snake in number of feed
    for (let i = 0; i < newSegment; i++) {
        snake.push({...snake[snake.length-1]});
    }
    newSegment = 0;
}

function isEqualPositions(position1, position2){
    return position1.x === position2.x && position1.y === position2.y;
}

export function snakeIntersection(){
    return onSnake(snake[0], {ignoreHead: true});
}

export function getSnakeHead(){
    return snake[0];
}

export function getSnakeSize(){
    return snake.length;
}