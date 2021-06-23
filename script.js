let movingRule = document.getElementById("rule-in")
let slideRule = document.getElementsByClassName("slide-rule-parts")
let bottomPart = document.getElementById("rule-out-bottom")

let pos0 = 0, pos1 = 0
let initialPos = movingRule.style.left
let initialOffsetLeft = movingRule.offsetLeft
let initialWidth = movingRule.offsetWidth

movingRule.style.width = slideRule[0].offsetWidth
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