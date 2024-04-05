let boxes = document.querySelectorAll('.box');
let resetGame = document.querySelector('.reset');
let newGame = document.querySelector('.newGame');
let msg = document.querySelector('.win');

let turnO = true;
let btnCount = 0;

const winners = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach( box => {
    box.addEventListener("click", function(){
        if(turnO){
            box.innerText = "O";
            box.style.color = "blue"
            turnO = false;
        }else{
            box.innerText = "X";
            box.style.color = "red"
            turnO = true;
        }
        box.disabled = true;
        btnCount++;
        drawCondition();
        checkWinner();
    })
});

function drawCondition(){
    if(btnCount == 9){
        msg.innerText = "Game Draw";
        msg.classList.remove("hide");
    }
}

function reset(){
    turnO = true;
    btnCount = 0;
    enableBtns();
    msg.classList.add('hide');
}

function checkWinner(){
    for(let pattern of winners){
        // console.log(pattern[0],pattern[1],pattern[2]); //0 1 2
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);//box0 box1 box2

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                // console.log("winner", pos1);
                showWinner(pos1);
            }
        }
    }
}

function enableBtns(){
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

function disableBtns(){
    for(box of boxes){
        box.disabled = true;
    }
}

function showWinner(winner){
    msg.innerText = `Congratulations, Winner - ${winner}`;
    msg.classList.remove('hide');
    disableBtns();
}

newGame.addEventListener("click", reset);
resetGame.addEventListener("click", reset);