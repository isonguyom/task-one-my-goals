// Declarations
let dayOfTheWeek = document.querySelector(".day-of-week")
let currentUtcTime = document.querySelector(".utc-time")
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Current Day
const dayD = new Date();
let day = days[dayD.getDay()];
dayOfTheWeek.innerHTML = day

// Current UTC Time
const utcD = new Date();
let utcMs = utcD.getUTCMilliseconds();
currentUtcTime.innerHTML = utcMs