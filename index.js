const scoreHome = document.getElementById("score-home")
const scoreGuest = document.getElementById("score-guest")

let totalScoreHome = 0
let totalScoreGuest = 0

function add1Home() {
    totalScoreHome += 1
    scoreHome.textContent = totalScoreHome
    highlight()
}

function add2Home() {
    totalScoreHome += 2
    scoreHome.textContent = totalScoreHome
    highlight()
}

function add3Home() {
    totalScoreHome += 3
    scoreHome.textContent = totalScoreHome
    highlight()
}

function add1Guest() {
    totalScoreGuest += 1
    scoreGuest.textContent = totalScoreGuest
    highlight()
}

function add2Guest() {
    totalScoreGuest += 2
    scoreGuest.textContent = totalScoreGuest
    highlight()
}

function add3Guest() {
    totalScoreGuest += 3
    scoreGuest.textContent = totalScoreGuest
    highlight()
}

function newGame() {
    totalScoreGuest = 0
    totalScoreHome = 0
    scoreHome.textContent = totalScoreHome
    scoreGuest.textContent = totalScoreGuest
}

function highlight() {
    if(totalScoreHome > totalScoreGuest) {
        scoreHome.style.border = "solid #F94F6D 2px"
        scoreGuest.style.border = "none"
    }else if(totalScoreGuest > totalScoreHome) {
        scoreHome.style.border = "none"
        scoreGuest.style.border = "solid #F94F6D 2px"
    }else {
        scoreHome.style.border = "none"
        scoreGuest.style.border = "none"
    }
}