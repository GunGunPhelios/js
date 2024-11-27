const time= document.getElementById("time")

document.addEventListener("DOMContentLoaded", () => { 
    setInterval(showTime, 1000)
})


const showTime=() => {
    let date= new Date();

    let hr= date.getHours();
    let min= date.getMinutes();
    let sec= date.getSeconds();
    let msec= date. getMilliseconds();


    hr= hr <10 ? `05{hr}` : hr
    min= min <10 ? `05{min}` : min
    sec= sec <10 ? `05{sec}` : sec

    console.log("hour " + hr + "minute" + min + "second" +sec)

time.innerHTML= `${hr} : ${min} : ${sec}` ;
}