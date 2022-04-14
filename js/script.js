const result = document.querySelector("#result")
const confirmBtn = document.querySelector(".btnResult")

function insert(valor){
    result.textContent += valor
}

function clean(){
    result.textContent = ""
}

function erase(){
    if (result.textContent){
        let resultErase = document.querySelector("#result").textContent
        result.textContent = resultErase.substring(0, resultErase.length-1)
    }
}

function confirm(){
    if (result.textContent){
        document.querySelector("#result").textContent = eval(result.textContent)
    }
}