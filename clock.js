// Digital Clock Pogram

function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);;
    const seconds = now.getSeconds().toString().padStart(2, 0);;

    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;

    document.getElementById("clock").textContent = timeString;
}

updateClock();

//It updates clocks every set of Interval
setInterval(updateClock, 1000);

console.log("change of Git")
console.log("added .gitignore file")
// Another chnage in file