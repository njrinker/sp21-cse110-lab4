setInterval(secondsClock, 1000);

function secondsClock() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time)
}
