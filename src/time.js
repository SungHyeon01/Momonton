const clockTitle = document.querySelector("h3");

function getTime() {
    const date = new Date();
    const years = date.getFullYear();
    const months = date.getMonth() + 1;
    const days = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
 
    clockTitle.innerText = `${years} / ${months < 10 ? `0${months}` : months} / ${days < 10 ? `0${days}`: hours} / ${hours < 10 ? ` 0${hours}` : hours} / ${minutes < 10 ? `0${minutes}` : minutes} / ${seconds < 10 ? `0${seconds}` : seconds}`;
  }
  
  function init() {
    getTime();
    setInterval(getTime, 1000);
  }
  init();
  