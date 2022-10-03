let elYear = document.querySelector(".year");
let elMonth = document.querySelector(".month");
let elDay = document.querySelector(".day");

let dateNow = new Date();
let year = dateNow.getFullYear();
let month = dateNow.getMonth() + 1;
let date = dateNow.getDate();

elYear.textContent = year;
elMonth.textContent = (month < 10) ? '0' + month : month;
elDay.textContent = (date < 10) ? '0' + date : date;

let elHour = document.querySelector(".hour");
let elminut = document.querySelector(".minut");
let elsecund = document.querySelector(".secund");

function timer() {
  let ddateNow = new Date()
  let hour = ddateNow.getHours();
  let minute = ddateNow.getMinutes();
  let secund = ddateNow.getSeconds();
  
  elHour.textContent = (hour < 10) ? '0' + hour : hour;
  elminut.textContent = (minute < 10) ? '0' + minute : minute;
  elsecund.textContent = (secund < 10) ? '0' + secund : secund;
}


setInterval(() => {
  timer()
}, 1000);