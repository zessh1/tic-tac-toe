
let turns = true;
let x_squares = [];
let o_squares = [];
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
let player1_score = 0;
let player2_score = 0;
function square_click(x) {
    if (turns) {
        const square = document.getElementById(x)
        square.innerText = "X";
        square.classList.add("disable");
        turns=false;
        cursorChanage(turns)
        x_squares.push(x)
        winCheck(x_squares,"player1");

    }
    else {
        const square = document.getElementById(x)
        square.innerText = "O"
        square.classList.add("disable")
        turns=true;
        cursorChanage(turns)
        o_squares.push(x)
        winCheck(o_squares,"player2")

    }
};

function cursorChanage(turns) {
    const squares = document.querySelectorAll(".square")

    if (turns) {
        for (let i = 0;i < squares.length;i++) {
            squares[i].style.cursor = "url('../cursor/x-cursor.cur') 16 16,auto";
        }
        }
    else {
        for (let i = 0;i < squares.length;i++) {
            squares[i].style.cursor = "url('../cursor/o-cursor.cur') 16 16,auto";
        }    }
};

function winCheck(player,player_name) {
    let possibilities = [[1,2,3],[1,4,7],[1,5,9],[2,5,8],[3,6,9],[3,5,7],[4,5,6],[7,8,9]];
    let squares = document.getElementsByClassName("square")
    for (let possibility of possibilities) {

        if (player.includes(possibility[0]) & player.includes(possibility[1]) & player.includes(possibility[2])) {
            console.log("win win")
            for (let i = 0;i < 9; i++) {
                if (!squares[i].classList.contains("disable")) {
                    squares[i].classList.add("disable")
                }
            }
            scoreUpload(player_name)
            break;
        }
    }

}

function scoreUpload(player) {
    if (player = "player1") {
        player1_score += 1
        player1.innerHTML = player1_score;
    }
    else {
        player2_score +=1
        player2.innerHTML = player2_score;
    }
}

function resetButton () {
    let disabledSquares = document.getElementsByClassName("square")
    turns = true;
    x_squares = [];
    o_squares = [];
    for (let i = 0; i < 9; i++) {
        if (disabledSquares[i].classList.contains("disable")) {
            disabledSquares[i].classList.remove("disable");
            disabledSquares[i].innerHTML = "";
        }
    }
}

