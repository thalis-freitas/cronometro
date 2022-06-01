var ms = 0
var s = 0
var min = 0
var h = 0

var msTexto = document.getElementById("ms")
var sTexto = document.getElementById("s")
var minTexto = document.getElementById("min")
var hTexto = document.getElementById("h")
var interval

var btnStart = document.getElementById("start")
var btnPause = document.getElementById("pause")

btnPause.style.display = "none"

function start(){
    interval = setInterval(iniciar, 10)
    
    btnStart.style.display = "none"
    btnPause.style.display = "inline-block"
}

function pause(){
    clearInterval(interval)

    btnPause.style.display = "none"
    btnStart.style.display = "inline-block"
}

function reset(){
    clearInterval(interval)

    ms = 0
    s = 0
    min = 0
    h = 0

    msTexto.innerHTML = "00"
    sTexto.innerHTML = "00"
    minTexto.innerHTML = "00"
    hTexto.innerHTML = "00"

    btnPause.style.display = "none"
    btnStart.style.display = "inline-block"

}

function iniciar(){
    ms++
    if (ms < 10){
        msTexto.innerHTML = "0" + ms
    }
    if(ms >= 10){
        msTexto.innerHTML = ms
    }
    if (ms > 99){
        ms = 0
        s++
    }
    if (s < 10){
        sTexto.innerHTML = "0" + s
    }
    if (s >= 10){
        sTexto.innerHTML = s}
    if (s > 59){
        s = 0
        min++
    }
    if (min < 10){
        minTexto.innerHTML = "0" + min
    }
    if (min >= 10){
        minTexto.innerHTML = min
    }
    if (min > 59){
        min = 0
        h++
    }
    if (h < 10){
        hTexto.innerHTML = "0" + h
    }
    if (h >= 10){
        hTexto.innerHTML = h
    }

}


