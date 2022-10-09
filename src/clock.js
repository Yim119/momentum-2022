const currentTime = document.querySelector(".clock__time");

function getTime() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");

  currentTime.innerText = `${hour} : ${minute} : ${second}`;
}

getTime();
setInterval(getTime, 1000);
