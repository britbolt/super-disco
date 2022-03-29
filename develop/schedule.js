const DateTime = luxon.DateTime;
const dt = DateTime.now();
let now = DateTime.local().toFormat("H");
let currentTime = parseInt(now);

//display current date in header
window.onload = showDate ();

function showDate () {
    document.getElementById('currentDay').innerHTML = dt.toLocaleString(DateTime.DATETIME_MED) ;
    
};
//console.log(now);

//logic to reload clock for accurate time display in header
function upDate() {
setInterval(showDate, 1000);
};
upDate();

//save task user inputs when button clicked
//click event for 9AM
$("#btn9").on("click change", function(){
  let userTask = $("#task9").val();
  $("#task9").text(userTask);
  localStorage.setItem("9AM", userTask);
});

//retrieve task from local storage 9AM
$("#task9").val(localStorage.getItem("9AM"));



//click event for 10AM
$("#btn10").on("click change", function(){
  let userTask = $("#task10").val();
  $("#task10").text(userTask);
  localStorage.setItem("10AM", userTask);
});
//retrieve task from local storage 10AM
$("#task10").val(localStorage.getItem("10AM"));


//click event for 11AM
$("#btn11").on("click change", function(){
  let userTask = $("#task11").val();
  $("#task11").text(userTask);
  localStorage.setItem("11AM", userTask);
});
//retrieve task from local storage 11AM
$("#task11").val(localStorage.getItem("11AM"));


//click event for 12PM
$("#btn12").on("click change", function(){
  let userTask = $("#task12").val();
  $("#task12").text(userTask);
  localStorage.setItem("12PM", userTask);
});
//retrieve task from local storage 12PM
$("#task12").val(localStorage.getItem("12PM"));



//click event for 1PM
$("#btn1").on("click change", function(){
  let userTask = $("#task1").val();
  $("#task1").text(userTask);
  localStorage.setItem("1PM", userTask);
});
//retrieve task from local storage 1PM
$("#task1").val(localStorage.getItem("1PM"));



//click event for 2PM
$("#btn2").on("click change", function(){
  let userTask = $("#task2").val();
  $("#task2").text(userTask);
  localStorage.setItem("2PM", userTask);
});
//retrieve task from local storage 2PM
$("#task2").val(localStorage.getItem("2PM"));



//click event for 3PM
$("#btn3").on("click change", function(){
  let userTask = $("#task3").val();
  $("#task3").text(userTask);
  localStorage.setItem("3PM", userTask);
});

//retrieve task from local storage 3PM
$("#task3").val(localStorage.getItem("3PM"));



//click event for 4PM
$("#btn4").on("click change", function(){
  let userTask = $("#task4").val();
  $("#task4").text(userTask);
  localStorage.setItem("4PM", userTask);
});

//retrieve task from local storage 4PM
$("#task4").val(localStorage.getItem("4PM"));



//click event for 5PM
$("#btn5").on("click change", function(){
  let userTask = $("#task5").val();
  $("#task5").text(userTask);
  localStorage.setItem("5PM", userTask);
});

//retrieve task from local storage 5PM
$("#task5").val(localStorage.getItem("5PM"));


//create const to access textarea divs
const times = document.getElementsByClassName("col-9");
//create array from divs using ids
Array.from(times).forEach(time => {
  let timeList = time.id;

//convert ids to numbers to compare with current time
    let timeHour = parseInt(timeList);
  
//if current time, change color 
     if (timeHour===currentTime) {
      time.classList.add('present');
  //if current time is in the past change color to gray
    } else if (timeHour < currentTime) {
      time.classList.add ('past')
    }
//if current time is in the future change color to green
    else if (timeHour > currentTime) {
      time.classList.add ('future')
    };
});
