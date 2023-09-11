let time = document.querySelector(".time")
let date = document.querySelector(".date")

setInterval(function(){
    time.innerHTML = new Date().toLocaleTimeString()
}, 1000)

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sartuday"]

date.innerHTML = days[new Date().getDay()]