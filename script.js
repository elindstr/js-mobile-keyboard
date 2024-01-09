window.addEventListener("resize", resize)
window.addEventListener("orientationchange", resize)
resize ()
function resize () {
    let rowWidth = document.querySelector("body").offsetWidth
    let keyWidth = (rowWidth-10) / 11
    let keyHeight = keyWidth * 1.2
    renderKeyboard(keyWidth, keyHeight)
}

function renderKeyboard(keyWidth, keyHeight) {
    keyboardDiv = document.getElementById("keyboard")
    keyboardDiv.innerHTML = "" 
    let keyboardRows = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        ["⏎", "Z", "X", "C", "V", "B", "N", "M", "⌫"]
    ]
    for (let r = 0 ; r < keyboardRows.length; r++) {
        let row = document.createElement("div")
        row.setAttribute("class", "keyboardRow")
        for (let i = 0; i < keyboardRows[r].length; i++) {
            let d = document.createElement("div")
            d.innerHTML = `<span>${keyboardRows[r][i]}</span>`
            d.setAttribute("class", "keyboardKeyDiv")
            d.style.width = keyWidth
            d.style.height = keyHeight
            d.style.fontSize = keyHeight * .6
            row.appendChild(d)
        }
        keyboardDiv.appendChild(row)
    }
}
