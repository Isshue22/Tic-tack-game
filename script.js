let boxes = document.querySelectorAll(".btn");
let resetBt = document.querySelector("#reset");
let restartBt = document.querySelector("#restart");
let msg = document.querySelector(".msg");
let winc = document.querySelector(".winBox")
const winchk = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [2, 3, 6],
    [2, 5, 8],
    [1, 4, 7]
];

let turn0 = true;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerHTML = "0";//creating turn 
            turn0 = false;
        }
        else {
            box.innerHTML = "X";
            turn0 = true;
        }
        box.disabled = true;
        winCheck();
    })

});
//creating reset and restart button function
const re = () => {
    for (let box of boxes) {
        box.innerHTML = "";
        winc.classList.add("hide");
        turn0 = true;
        box.disabled = false;//i have prev decide box will disable after click
    }
}
const boxDisable = () => {//creating disable function for disable button after winner  declear
    for (let box of boxes) {
        box.disabled = true;
    }
}

const showWinner = (Winner) => {
    msg.innerHTML = `Winner is=> ${Winner}`
    winc.classList.remove("hide");

}
const winCheck = () => {
    for (pattan of winchk) {//winner checking function
        let p1 = boxes[pattan[0]].innerHTML;
        let p2 = boxes[pattan[1]].innerHTML;
        let p3 = boxes[pattan[2]].innerHTML;
        if (p1 != "" && p2 != "" && p3 != "") {
            if (p1 == p2 && p2 == p3) {
                boxDisable();
                showWinner(p1); //calling showwinner function

            }
        }
    }
}
resetBt.addEventListener("click", re);
restartBt.addEventListener("click", re);