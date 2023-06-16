function tiempo(){
    let date = new Date();
    let hr = date.getHours();
    let mn = date .getMinutes();
    let sec= date.getSeconds();

    hr = (hr < 10) ? "0" + hr : hr;
    mn = (mn < 10) ? "0" + mn : mn;
    sec = (sec < 10) ? "0" + sec : sec;

    let time = hr + ":" + mn + ":" + sec;
    let watch = document.querySelector('#watch');
    watch.innerHTML = time;
}

setInterval(tiempo, 1000);