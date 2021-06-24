// pegando os elementos que serão usados
let movingRule = document.getElementById("rule-in")
let bottomPart = document.getElementById("rule-out-bottom")
let numberInput = document.getElementById("number-input")

// iniciando as posicões iniciais para ser feito o reset depois
let pos0 = 0, pos1 = 0
let initialPos = movingRule.style.left
let initialOffsetLeft = movingRule.offsetLeft

// ajuste da largura da régua móvel
movingRule.style.width = bottomPart.offsetWidth
// margem entre as partes estáticas para que a parte móvel encaixe no meio
bottomPart.style.marginTop = movingRule.offsetHeight

let mouseClicking = false

movingRule.onmouseover = function(){
    movingRule.style.cursor = "grab"
}

movingRule.onmousedown = function(e){
    // posição inicial quando clicar
    pos0 = e.clientX
    mouseClicking = true
}

document.onmouseup = function(){
    // reseta o estado e o cursor
    if (mouseClicking){
        movingRule.style.cursor = "grab"
        mouseClicking = false
    }
}

document.onmousemove = function(event){
    if (mouseClicking){
        movingRule.style.cursor = "grabbing"
        // calcula o deslocamento desde a posição inicial
        pos1 = pos0 - event.clientX
        pos0 = event.clientX
        // posiciona o elemento de a cordo com a nova posição
        movingRule.style.left = (movingRule.offsetLeft - pos1) - initialOffsetLeft + "px"
    }
}

// reseta a régua para a posição inicial
document.onkeydown = function(event){
    if(event.key == 'r'){
        movingRule.style.left = initialPos
    }
}

// filtra os caractéres na textbox para permitir apenas números
numberInput.oninput = function(e){
    let character = e.data
    let currentValue = numberInput.value
    if (isNaN(character)){
        numberInput.value = currentValue.slice(0, currentValue.length - 1)
    }
}