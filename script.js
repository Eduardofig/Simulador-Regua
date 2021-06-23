let movingRule = document.getElementById("rule-in")
let images = document.getElementsByClassName("rule-img")

let pos0 = 0, pos1 = 0
let initialMargin = movingRule.style.marginLeft
let initialOffsetLeft = movingRule.offsetLeft
let initialWidth = images[0].offsetWidth

for (let i = 0; i < images.length; i++){
    images[i].ondragstart = function(event){
        event.preventDefault()
    }
}

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
        mouseClicking = false
    }
}

document.onmousemove = function(event){
    if (mouseClicking){
        pos1 = pos0 - event.clientX
        pos0 = event.clientX
        //movingRule.style.marginLeft = Math.max(Math.min((movingRule.offsetLeft - pos1), 1000), -1000) + "px"
        movingRule.style.marginLeft = (movingRule.offsetLeft - pos1) - initialOffsetLeft + "px"
        
    }
}

document.onkeydown = function(event){
    if(event.key == 'r'){
        movingRule.style.marginLeft = initialMargin
    }
}