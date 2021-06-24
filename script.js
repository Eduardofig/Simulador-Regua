let movingRule = document.getElementById("rule-in")
let bottomPart = document.getElementById("rule-out-bottom")
let numberInput = document.getElementById("number-input")

let pos0 = 0, pos1 = 0
let initialPos = movingRule.style.left
let initialOffsetLeft = movingRule.offsetLeft

movingRule.style.width = bottomPart.offsetWidth
bottomPart.style.marginTop = movingRule.offsetHeight

let mouseClicking = false

movingRule.onmouseover = function(){
    movingRule.style.cursor = "grab"
}

movingRule.onmousedown = function(e){
    pos0 = e.clientX
    mouseClicking = true
}

document.onmouseup = function(){
    if (mouseClicking){
        movingRule.style.cursor = "grab"
        mouseClicking = false
    }
}

document.onmousemove = function(event){
    if (mouseClicking){
        movingRule.style.cursor = "grabbing"
        pos1 = pos0 - event.clientX
        pos0 = event.clientX
        movingRule.style.left = (movingRule.offsetLeft - pos1) - initialOffsetLeft + "px"
    }
}

document.onkeydown = function(event){
    if(event.key == 'r'){
        movingRule.style.left = initialPos
    }
}

numberInput.oninput = function(e){
    let character = e.data
    let currentValue = numberInput.value
    if (isNaN(character)){
        numberInput.value = currentValue.slice(0, currentValue.length - 1)
    }
}