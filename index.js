// 1. scoreboard logic
let homeScore = 0;
let guestScore = 0;

// 2. DOM elements
const homeTeamScoreEl = document.getElementById("home-team-score-el");
const guestTeamScoreEl = document.getElementById("guest-team-score-el");


// 3. DOM team buttons
const homeFreeThrowBtn = document.getElementById("home-freethrow");
const homeFieldGoalBtn = document.getElementById("home-fieldgoal");
const homeThreePointerBtn = document.getElementById("home-threepointer");

const guestFreeThrowBtn = document.getElementById("guest-freethrow");
const guestFieldGoalBtn = document.getElementById("guest-fieldgoal");
const guestThreePointerBtn = document.getElementById("guest-threepointer");

const newGameBtn = document.getElementById("new-game");


// 4. event listeners
homeFreeThrowBtn.addEventListener("click", homeFreeThrow);
homeFieldGoalBtn.addEventListener("click", homeFieldGoal);
homeThreePointerBtn.addEventListener("click", homeThreePointer);

guestFreeThrowBtn.addEventListener("click", guestFreeThrow);
guestFieldGoalBtn.addEventListener("click", guestFieldGoal);
guestThreePointerBtn.addEventListener("click", guestThreePointer);

newGameBtn.addEventListener("click", newGame);


// 5. score update functions

function updateHomeScore() {
  homeTeamScoreEl.textContent = homeScore;
}

function updateGuestScore() {
  guestTeamScoreEl.textContent = guestScore;
}

// 6. home team scoring functions

function homeFreeThrow() {
    homeScore += 1;
    updateHomeScore();
}

function homeFieldGoal() {
    homeScore += 2;
    updateHomeScore();

}

function homeThreePointer() {
    homeScore += 3;
    updateHomeScore();

}

// 7. guest team scoring functions

function guestFreeThrow() {
    guestScore += 1;
    updateGuestScore();
}

function guestFieldGoal() {
    guestScore += 2;
    updateGuestScore();
}

function guestThreePointer() {
    guestScore += 3;
    updateGuestScore();
}

// 8. new game button function

function newGame() {
    homeScore = 0;
    guestScore = 0;
    updateHomeScore();
    updateGuestScore();

}
