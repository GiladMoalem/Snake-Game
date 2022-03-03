import { onSnake, feed_snake} from './snake.js'
import { randomGridPosition as getRandomGridPosition} from './grid.js'

const food = [];
const NUM_OF_FOOD = 1;
const FEED = 1;



export function update(){
    // console.log("update food - ",randFood());
    while(food.length < NUM_OF_FOOD)
        food.push(randFood());

    food.forEach((food_positin, index) => {
        if(onSnake(food_positin)){
            feed_snake(FEED);
            food[index] = randFood();
            console.log("new food")
        }
    });
    
}

export function draw(game_board){

    food.forEach(element => {
        const food_element = document.createElement("div");
        food_element.className = "food";
        food_element.style.gridColumnStart = element.x;
        food_element.style.gridRowStart = element.y;

        game_board.appendChild(food_element);
        
    });
}

function randFood(){
    let position;
    do{
        position = getRandomGridPosition()
    }
    while(onSnake(position));

    return position;
}
