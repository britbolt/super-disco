const DateTime = luxon.DateTime;

const dt = DateTime.now();

let now = DateTime.local().toFormat("h");

//display current date in header
window.onload = function showDate () {
    document.getElementById('currentDay').innerHTML = dt.toLocaleString(DateTime.DATETIME_MED) ;
   
};
console.log(now);

const rows = document.getElementsByClassName("row");

Array.from(rows).forEach(rows => {
let scheduleTime = rows.id, timeHours;
if (scheduleTime) {
timeHours = parseInt(scheduleTime);
}
//console.log(timeHours);
 
if (timeHours){
  if (timeHours === now){
  rows.style.backgroundColor = "blue";
}
  else if (now < timeHours) {
  rows.style.backgroundColor = "green";
}
  else if (now > timeHours) {
  rows.style.backgroundColor = "red";
}
};  
});

//update event when textarea is used
 
