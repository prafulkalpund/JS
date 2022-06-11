let homeScoreEle = document.getElementById("home-score");
let guestScoreEle = document.getElementById("guest-score");
let homeScore = 0
let guestScore = 0

function incrementHomeScore(count){
    homeScore += count
    homeScoreEle.textContent = homeScore
}

function incrementGuestScore(count){
    guestScore += count
    guestScoreEle.textContent = guestScore
}