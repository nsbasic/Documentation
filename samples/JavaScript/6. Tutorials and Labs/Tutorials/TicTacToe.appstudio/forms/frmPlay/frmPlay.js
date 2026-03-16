var player;
var last_move_i;
var last_move_j;
var last_state;
var moves_count;

function init_board() {
    btn11.value = "";
    btn12.value = "";
    btn13.value = "";

    btn21.value = "";
    btn22.value = "";
    btn23.value = "";

    btn31.value = "";
    btn32.value = "";
    btn33.value = "";

    player = 1;
    moves_count = 0;
    last_state = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    lblTurn.textContent = "Player " + player + "'s turn";
}

frmPlay.onshow = function() {
    init_board();
}

function changeState(i, j, btn) {
    if (last_state[i][j] == "") {
        if (btn.value == "") {
            if (player == 1)
                btn.value = "X";
            else
                btn.value = "O";
        } else if (btn.value == "X" || btn.value == "O") {
            btn.value = "";
        }
    }
}

btn11.onclick = function() {
    changeState(0,0,btn11);
}
btn12.onclick = function() {
    changeState(0, 1, btn12);
}
btn13.onclick = function() {
    changeState(0, 2, btn13);
}
btn21.onclick = function() {
    changeState(1, 0, btn21);
}
btn22.onclick = function() {
    changeState(1, 1, btn22);
}
btn23.onclick = function() {
    changeState(1, 2, btn23);
}
btn31.onclick = function() {
    changeState(2, 0, btn31);
}
btn32.onclick = function() {
    changeState(2, 1, btn32);
}
btn33.onclick = function() {
    changeState(2, 2, btn33);
}

function reset_move(i, j, btn) {
    btn.value = last_state[i][j];
}

var newMove;

function check_move(i, j, btn) {
    if (last_state[i][j] != btn.value) {
        newMove = btn.value;
        last_move_i = i;
        last_move_j = j;
        return 1;
    }
    return 0;
}

function find_new_move() {
    var count = 0;
    newMove = "";
    count += check_move(0, 0, btn11);
    count += check_move(0, 1, btn12);
    count += check_move(0, 2, btn13);
    count += check_move(1, 0, btn21);
    count += check_move(1, 1, btn22);
    count += check_move(1, 2, btn23);
    count += check_move(2, 0, btn31);
    count += check_move(2, 1, btn32);
    count += check_move(2, 2, btn33);
    return count;
}

function reset_board() {
    reset_move(0, 0, btn11);
    reset_move(0, 1, btn12);
    reset_move(0, 2, btn13);
    reset_move(1, 0, btn21);
    reset_move(1, 1, btn22);
    reset_move(1, 2, btn23);
    reset_move(2, 0, btn31);
    reset_move(2, 1, btn32);
    reset_move(2, 2, btn33);
}

function next_turn() {
    if (player == 1)
        player = 2;
    else if (player == 2)
        player = 1;
    lblTurn.textContent = "Player " + player + "'s turn";
}

function player_won() {
    if ((last_state[0][0] != "" && last_state[0][0] == last_state[0][1] && last_state[0][0] == last_state[0][2]) ||
        (last_state[0][0] != "" && last_state[0][0] == last_state[1][1] && last_state[0][0] == last_state[2][2]) ||
        (last_state[0][0] != "" && last_state[0][0] == last_state[1][0] && last_state[0][0] == last_state[2][0]) ||
        (last_state[0][2] != "" && last_state[0][2] == last_state[1][1] && last_state[0][2] == last_state[2][0]) ||
        (last_state[0][1] != "" && last_state[0][1] == last_state[1][1] && last_state[0][1] == last_state[2][1]) ||
        (last_state[0][2] != "" && last_state[0][2] == last_state[1][2] && last_state[0][2] == last_state[2][2]) ||
        (last_state[1][0] != "" && last_state[1][0] == last_state[1][1] && last_state[1][0] == last_state[1][2]) ||
        (last_state[2][0] != "" && last_state[2][0] == last_state[2][1] && last_state[2][0] == last_state[2][2]))
        return true;
    return false;
}

btnNext.onclick = function() {
    var count = find_new_move();
    if (count > 1) {
        NSB.Print("Too many moves! Resetting back");
        reset_board();
    } else if (count == 1) {
        last_state[last_move_i][last_move_j] = newMove;
        if (player_won() == false) {
            next_turn();
            moves_count++;
            if (moves_count == 9) {
                NSB.Print("It's a tie!");
                init_board();
                ChangeForm(frmStart);
            }
        } else {
            NSB.Print("Player " + player + "won!");
            init_board();
            ChangeForm(frmStart);
        }
    }
}

btnReset.onclick = function() {
    init_board();
}

btnMenu.onclick = function() {
    init_board();
    ChangeForm(frmStart);
}