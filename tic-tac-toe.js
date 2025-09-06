let button=document.querySelectorAll(".btn");// this is the button class by which we can update and do several things in button

let resetbtn=document.querySelector(".rst");// this is the button for rest the game

let newGame=document.querySelector(".new");// this is the button for new game after winning and withdraw the match

let msg=document.querySelector(".msg-container");// this is the div to use hide or show the winner's name and new game button section

let para=document.querySelector("p");// this is the paragraph in which the winner's name declare



let turn0=true;

const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];



// this function is used for whenever i clicked on the any button it draw the either X or O. 

button.forEach((btn)=>{
    btn.addEventListener("click",()=>{
    if(turn0){
        btn.innerText="0";
        turn0=false;
    }
    else{
        btn.innerText="X";
        turn0=true;
    }
    btn.disabled=true;
    checkWinner(); // Call checkWinner after each move
    });
});



// this function is used to reset the value


resetbtn.addEventListener("click",()=>{
    button.forEach((btn)=>{
        btn.innerText="";
        btn.disabled=false; // re-enable all buttons
    });
    msg.classList.add("hide");  // this method is use to hide the winner's name and new game button
});


// this is the arrow function of the checkWinner which is basically used for check who is the winner in which we check the buttons pattern and decide who is the winner
const checkWinner = () => {
    for (let i of win) {
        let p1 = button[i[0]].innerText;
        let p2 = button[i[1]].innerText;
        let p3 = button[i[2]].innerText;
        if ((p1 !== "") && (p2 !== "") && (p3 !== "")) {
            if ((p1 === p2) && (p2 === p3)) {
                showWinner(p1);  // this function is used to show who is the winner
                return; 
        }
    }
    }
    let isDraw = true;  // this variable is used to check that game is draw or not
    for (let btn of button) {
        if (btn.innerText === "") { // this condition is check whether the tic-tac-toe boxes are empty or not
            isDraw = false; // if these are empty then we cannot define who is the winner
            break;
        }
    }

    if (isDraw) {
        showDraw(); 
    }
};

const showDraw = (winner) => {  // this function shows the winner's name and disables all buttons
    para.innerText = "OOP'S IT'S DRAW PLEASE TRY AGAIN";
    msg.classList.remove("hide");
    button.forEach((btn) => {
        btn.disabled = true;
    });
}


const showWinner = (winner) => {  // this function shows the winner's name and disables all buttons
    para.innerText = `Winner is your ${winner}`;
    msg.classList.remove("hide");
    button.forEach((btn) => {
        btn.disabled = true;
    });
}

newGame.addEventListener("click",()=>{  //this is the arrow function of newgame whenever i click the newgame button then the all game will be reset
    button.forEach((btn)=>{
        btn.innerText="";
        btn.disabled=false;
    });
    msg.classList.add("hide");
});
