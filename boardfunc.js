var board= [
    ["","",""],
    ["","",""],
    ["","",""]
]

const player = 'X';
const ai = '0';
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];

const cells = document.querySelectorAll('.cell');
startGame();

function startGame() {
    document.querySelector(".endgame").style.display = "none";
    board = Array.from(Array(9).keys());
    for(var i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', turnClick, false);
    }
}

function turnClick(square) {
    console.log(square.target.id);
}
/*var turn, sqrId, user, computer, row, col;

$(document).ready(function() {
    //checkbox event listener
    $(",checkBox").click(function(){
        if($(this).is(":checked")) {
            user = $(this).val();
            turn = user;
            computer = (user == 'X') ? 'O' : 'X';
        }
    });
    //square event listener

    $(".square").click(function() {
        sqrId = $(this).attr("id");
        $("#"+sqrId).text(turn);
        turn = (turn == user) ? computer : user;
    })
});
*/