let currentWord = "HANGMAN"
let correctLetters = []
let incorrectLetters = []
resetCorrectLettersDisplay()
function resetCorrectLettersDisplay (){
    const figureContainer = document.getElementById("display")
    figureContainer.innerHTML = ""
    for (let i = 0; i < currentWord.length; i++) {
        letterInput = document.createElement("span")
        letterInput.textContent = "_"
        letterInput.setAttribute("class", "hangman-letters");
        letterInput.setAttribute("id", `input_${i}`);
        figureContainer.appendChild(letterInput)
    }
}

function hangmanKeyCheck (userEntry) {
    userEntry = userEntry.toUpperCase()
    keyboardKeySpan = document.getElementById(userEntry)

    if (currentWord.includes(userEntry)) {

        //add to correctLetters figure
        for (let i = 0; i < currentWord.length; i++) {
            if (userEntry === currentWord[i]) {
                let letterInput = document.getElementById(`input_${i}`)
                letterInput.textContent = userEntry
            }
        }

        // green correct letters
        keyboardKeySpan.style.backgroundColor = "green"

        //check for win
        isWin = true
        for (let i = 0; i < currentWord.length; i++) {
            if (correctLetters.includes(currentWord[i]) == false) {
                isWin = false
            }
        }
        if (isWin == true) {
            console.log("win")
            alert("You win!")
        }
    }

    else {
        // blacken incorrect letters
        if (/^[A-Z]$/.test(userEntry)) {
            keyboardKeySpan.style.backgroundColor = "rgb(63, 63, 63)"
        }
    }
}