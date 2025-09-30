// button monitor
const boxes = document.querySelectorAll(".box");

let player = true; // true or false
console.log(boxes);

const winner = [
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6]
];

function checkWinner(){
    for(let data of winner){
        const btn1 = boxes[data[0]].innerHTML;
        const btn2 = boxes[data[1]].innerHTML;
        const btn3 = boxes[data[2]].innerHTML;

        if(btn1 != "" && btn2 != "" && btn3 != ""){
            if(btn1 === btn2 && btn2 === btn3){
                console.log("The winner is "+ btn1);
                 for(let box of boxes){
                       box.disabled = true;
                      }
            }
        }
    }

};

boxes.forEach((box)=>{
    // console.log(box.innerHTML);
    box.addEventListener("click", ()=>{
        // console.log(box.innerHTML);
        if(player){
            box.innerHTML = "o";
            player = false;
        }
        else{
            box.innerHTML = "X";
            player = true;

        }
        box.disabled = true;
        checkWinner();
    });
});

