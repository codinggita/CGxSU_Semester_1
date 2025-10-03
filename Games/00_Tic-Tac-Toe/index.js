var player1 = prompt("enter your name:");
console.log(player1);
var player2 = prompt("enter your name:");
console.log(player2);

// button monitor
const boxes = document.querySelectorAll('.box')
// document.querySelector();
//document.querySelectorAll();
//document.getElementById();
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
    for(let row of winner){
        const btn1 = boxes[row[0]].innerHTML;
        console.log(btn1);
        const btn2 = boxes[row[1]].innerHTML;
        console.log(btn2);
        const btn3 = boxes[row[2]].innerHTML;
        console.log(btn3);

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

Array.from(boxes).forEach((box)=>{
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

var a = [1,2,3,4,5,6,7,8,9,10,23,45,3,345,46
];
// array synatx

for(var i=0; i<=9; i++){
    console.log(a[i]);
}

for(var c in a){
    // console.log("the index is "+i);
    // console.log("the value of particular index is "+a[i]);
    console.log(c);
}

// a.forEach((i)=>{
//     console.log(i);
// });

// for(var b of a){
//     console.log(b);
// }

