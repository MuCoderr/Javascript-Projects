let myName = document.querySelector("#myName");
myName.innerHTML = prompt("Adınızı Giriniz");

function showTime() {
  const clockElement = document.querySelector("#myClock");
  const currentTime = new Date();

  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();
  const day = currentTime.getDay();

  const daysOfWeek = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

  const timeString =
    hour + ":" + addLeadingZero(minute) + ":" + addLeadingZero(second);
  const dayString = daysOfWeek[day];

  clockElement.innerHTML = timeString + " " + dayString;
}

function addLeadingZero(number) {
  return number < 10 ? "0" + number : number;
}

showTime();
setInterval(showTime, 1000);
