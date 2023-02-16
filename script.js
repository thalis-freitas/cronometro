let ms = 0
let sec = 0
let min = 0
let hrs = 0
let interval
let btnStart = document.querySelector('#start')
let btnPause = document.querySelector('#pause')
let btnReset = document.querySelector('#reset')

btnPause.style.display = 'none'

btnStart.addEventListener('click', () => {
    interval = setInterval(toStart, 10)
    btnStart.style.display = 'none'
    btnPause.style.display = 'inline-block'
})

btnPause.addEventListener('click', () => {
    clearInterval(interval)
    btnPause.style.display = 'none'
    btnStart.style.display = 'inline-block'
})

let msElement = document.querySelector('#ms')
let secElement = document.querySelector('#sec')
let minElement = document.querySelector('#min')
let hrsElement = document.querySelector('#hrs')

function returnToZero(){
    ms = 0
    sec = 0
    min = 0
    hrs = 0
    msElement.innerHTML = '00'
    secElement.innerHTML = '00'
    minElement.innerHTML = '00'
    hrsElement.innerHTML = '00'
}

btnReset.addEventListener('click', () => {
    clearInterval(interval)
    returnToZero()
    btnPause.style.display = 'none'
    btnStart.style.display = 'inline-block'
})

function formatMs(){
    if (ms < 10){
        msElement.innerHTML = '0' + ms
    }else if (ms >= 10 && ms < 100){
        msElement.innerHTML = ms
    }else{
        ms = 0
        sec++
    }
}

function formatSec(){
    if (sec < 10){
        secElement.innerHTML = '0' + sec
    }else if (sec >= 10 && sec < 60){
        secElement.innerHTML = sec
    }else{
        sec = 0
        min++
    }
}

function formatMin(){
    if (min < 10){
        minElement.innerHTML = '0' + min
    }else if (min >= 10 && min < 60){
        minElement.innerHTML = min
    }else{
        min = 0
        hrs++
    }
}

function toStart(){
    ms++
    formatMs()
    formatSec()
    formatMin()
    hrs < 10 ? hrsElement.innerHTML = '0' + hrs : hrsElement.innerHTML = hrs
}