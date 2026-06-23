function updateTime() {
  let nairobiElement = document.querySelector("#nairobi");
  let nairobiTimeElement = document.querySelector("#nairobi .time");
  let nairobiDateElement = document.querySelector("#nairobi .date");

  nairobiDateElement.innerHTML = moment()
    .tz("Africa/Nairobi")
    .format("MMMM Do YYYY");
  nairobiTimeElement.innerHTML = moment()
    .tz("Africa/Nairobi")
    .format("h:mm:ss [<small>]A[</small>]");

  let munichElement = document.querySelector("#munich");
  let munichTimeElement = document.querySelector("#munich .time");
  let munichDateElement = document.querySelector("#munich .date");

  munichDateElement.innerHTML = moment()
    .tz("Europe/Berlin")
    .format("MMMM Do YYYY");
  munichTimeElement.innerHTML = moment()
    .tz("Europe/Berlin")
    .format("h:mm:ss [<small>]A[</small>]");

  let maldivesElement = document.querySelector("#maldives");
  let maldivesTimeElement = document.querySelector("#maldives .time");
  let maldivesDateElement = document.querySelector("#maldives .date");

  maldivesDateElement.innerHTML = moment()
    .tz("Indian/Maldives")
    .format("MMMM Do YYYY");
  maldivesTimeElement.innerHTML = moment()
    .tz("Indian/Maldives")
    .format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
