let hr = min = sec = ms = "0" +0, comenzarTiempo;

const comenzarBtn =document.querySelector(".comenzar"),
    pararBtn = document.querySelector(".parar"),
    resetearBtn = document.querySelector(".resetear");

comenzarBtn.addEventListener("click", comenzar);
pararBtn.addEventListener("click", parar);
resetearBtn.addEventListener("click", resetear);

function comenzar() {
    comenzarBtn.classList.add("active");
    pararBtn.classList.remove("stopActive");

    comenzarTiempo = setInterval(() => {
        ms++;
        ms = ms < 10 ? "0" + ms :ms;
        
        if(ms ==100){
            sec++;
            sec = sec <10 ? "0" + sec : sec;
            ms = "0" + 0;
        }if(sec == 60){
            min++;
            min = min <10 ? "0" + min : min;
            sec = "0" + 0;
        }if(min == 60){
            hr++;
            hr = hr <10 ? "0" + hr : hr;
            min = "0" + 0;
        }
        
        putValue();

    },10);
}

function parar() {
    comenzarBtn.classList.remove("active");
    pararBtn.classList.remove("stopActive");
    clearInterval(comenzarTiempo);
}

function resetear() {
    comenzarBtn.classList.remove("active");
    pararBtn.classList.remove("stopActive");
    clearInterval(comenzarTiempo);
    hr = min = sec = ms = "0" + 0;
    putValue();
}

function putValue(){
    document.querySelector('.milesegundos').innerHTML = ms;
    document.querySelector('.segundos').innerHTML = sec;
    document.querySelector('.minutos').innerHTML = min;
    document.querySelector('.hora').innerHTML = hr;
}