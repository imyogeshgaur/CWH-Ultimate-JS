let hoursContainer = document.querySelector('.hours')
let minutesContainer = document.querySelector('.minutes')
let secondsContainer = document.querySelector('.seconds')
let hoursContainer2 = document.querySelector('.hours2')
let minutesContainer2 = document.querySelector('.minutes2')
let secondsContainer2 = document.querySelector('.seconds2')
let todaysDate = document.querySelector(".todaysDate")
let amorpm = document.querySelector("#amorpm")
let tickElements = Array.from(document.querySelectorAll('.tick'))
let last = new Date(0)
last.setUTCHours(-1)
let tickState = true
const months = ["January","Februray","March","April","May","June","July","August","September","October","November","December"]
const weekDay = ["Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];

let now = new Date
const day = now.getDay()-1;
const month = now.getMonth();
todaysDate.innerHTML = `${weekDay[day]}, ${now.getDate()} ${months[month]} ${now.getUTCFullYear()}`




function updateTime () {
    let now = new Date

  let lastHours = last.getHours().toString()
  let nowHours = now.getHours().toString()
  if (lastHours !== nowHours) {
    updateContainer(hoursContainer, nowHours)
  }
  
  let lastMinutes = last.getMinutes().toString()
  let nowMinutes = now.getMinutes().toString()
  if (lastMinutes !== nowMinutes) {
    updateContainer(minutesContainer, nowMinutes)
  }
  
  let lastSeconds = last.getSeconds().toString()
  let nowSeconds = now.getSeconds().toString()
//   console.log(nowSeconds,lastSeconds);
  
  if (lastSeconds !== nowSeconds) {
    updateContainer(secondsContainer, nowSeconds)
  }
  
  last = now
}
function updateTime2 () {
  let now = new Date
  
  let lastHour = last.getHours()-13
  let lastHours = lastHour.toString();
  let nowHour = now.getHours()-12;
  let nowHours = nowHour.toString();
  if (lastHours !== nowHours) {
    if(nowHours < 0){
        amorpm.innerHTML = "AM"
        updateContainer(hoursContainer2, nowHours)
    }else{
        amorpm.innerHTML = "PM"
        updateContainer(hoursContainer2, nowHours)
    }
  }
  
  let lastMinute = last.getMinutes()-1;
  let lastMinutes = lastMinute.toString();
  let nowMinutes = now.getMinutes().toString()
  if (lastMinutes !== nowMinutes) {
    updateContainer(minutesContainer2, nowMinutes)
  }
  
  let lastSecond = last.getSeconds()-1;
  let lastSeconds = lastSecond.toString();
  let nowSeconds = now.getSeconds().toString()
  if (lastSeconds !== nowSeconds) {
    updateContainer(secondsContainer2, nowSeconds)
  }
  
  last = now
}
function tick () {
  tickElements.forEach(t => t.classList.toggle('tick-hidden'))
}

function updateContainer (container, newTime) {
  let time = newTime.split('')
  
  if (time.length === 1) {
    time.unshift('0')
  }
  
  
  let first = container.firstElementChild
  if (first.lastElementChild.textContent !== time[0]) {
    updateNumber(first, time[0])
  }
  
  let last = container.lastElementChild
  if (last.lastElementChild.textContent !== time[1]) {
    updateNumber(last, time[1])
  }
}

function updateNumber (element, number) {
  let second = element.lastElementChild.cloneNode(true)
  second.textContent = number
  
  element.appendChild(second)
  element.classList.add('move')

  setTimeout(function () {
    element.classList.remove('move')
  }, 990)
  setTimeout(function () {
    element.removeChild(element.firstElementChild)
  }, 990)
}

setInterval(updateTime, 100)
setInterval(updateTime2,100);