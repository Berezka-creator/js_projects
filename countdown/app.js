const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();


// let futureDate = new Date(2021, 10, 29, 23, 59);
const futureDate = new Date(tempYear, tempMonth, tempDay + 5, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

//to get month, we access array of months
let month =  months[futureDate.getMonth()];
const date = futureDate.getDate();

//to get weekday we aess array of weekdays
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}am`;


//future tie in milseonds
const futureTime = futureDate.getTime();
console.log(futureTime)

function getRemainingTime(){
  const today = new Date().getTime();
  console.log(today)

  const t = futureTime - today;
  console.log(t)

  //1s = 1000ms
  //1m = 60s
  //1hr = 60min
  //1d = 24hr

  //calculate how many ms in one day
  const oneDay =  24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000;

  //calculate time
  let days = Math.floor(t/oneDay);
  let hours = Math.floor((t % oneDay)/oneHour);
  let minutes = Math.floor((t % oneHour)/oneMinute);
  let seconds = Math.floor((t % oneMinute)/1000);

  //set value array;
  const values = [days, hours, minutes, seconds];

  function format(i){
    if(i < 10){
      return i = `0${i}`;
    }
    return i;
  }

  items.forEach(function(item, index){
    item.innerHTML = format(values[index]);
  });

  if(t < 0){
    clearInterval(countdown);
    deadline.innerHTML =`<h4 class = "expired">Happy 2022!</h4>`
  }
}

//countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime()