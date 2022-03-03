export let move = { x: 0, y: 0};
let last_move = "";

window.addEventListener('keydown', element =>{
    switch(element.key){
        case 'ArrowLeft':
            if(last_move == "right") return;
            move = { x: -1, y:0};
            last_move = "left";            
            break;
        case 'ArrowRight':
            if(last_move == "left") return;
            move = { x: 1, y:0};         
            last_move = "right";   
            break;
        case 'ArrowUp':
            if(last_move == "down") return;
            move = { x: 0, y:-1};          
            last_move = "up";  
            break;
        case 'ArrowDown':
            if(last_move == "up") return;
            move = { x: 0, y:1};         
            last_move = "down";   
            break;
    }
})