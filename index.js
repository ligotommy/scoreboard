const homeNumEl = document.getElementById("homeNum")
const homeGuestEl = document.getElementsByClassName("upper-part")
const guestNumEl = document.getElementById("guestNum")
let homeWidth = 80, guestWidth = 80


function add(num, whichOne) {
    if (whichOne == "home") {
        let homeLen = (homeNumEl.textContent.length)
        homeNumEl.textContent = parseInt(homeNumEl.textContent)+num
        if (homeNumEl.textContent.length != homeLen) {
            homeWidth += 50
            homeNumEl.style.width = `${homeWidth}px`
        }
    } else {
        let guestLen = guestNumEl.textContent.length
        guestNumEl.textContent = parseInt(guestNumEl.textContent)+num
        if (guestNumEl.textContent.length != guestLen) {
            guestWidth += 50
            guestNumEl.style.width = `${guestWidth}px`
        }
    }
    let homePoints = parseInt(homeNumEl.textContent)
    let guestPoints = parseInt(guestNumEl.textContent)
    if (homePoints > guestPoints) {
        homeGuestEl[0].style.color = "darkgreen"
        homeGuestEl[1].style.color = "darkred"
    } else if (homePoints < guestPoints) {
        homeGuestEl[0].style.color = "darkred"
        homeGuestEl[1].style.color = "darkgreen"
    } else {
        homeGuestEl[0].style.color = "white"
        homeGuestEl[1].style.color = "white"
    }
}


function newGame() {
    homeGuestEl[0].style.color = "white"
    homeGuestEl[1].style.color = "white"
    homeNumEl.textContent = 0, guestNumEl.textContent = 0
    homeWidth = 80, guestWidth = 80
    guestNumEl.style.width = `${guestWidth}px`
    homeNumEl.style.width = `${homeWidth}px`
}