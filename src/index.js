function updateTime() {
  let nairobiElement = document.querySelector("#nairobi");
  if (nairobiElement) {
    let nairobiTimeElement = document.querySelector("#nairobi .time");
    let nairobiDateElement = document.querySelector("#nairobi .date");

    nairobiDateElement.innerHTML = moment()
      .tz("Africa/Nairobi")
      .format("MMMM Do YYYY");
    nairobiTimeElement.innerHTML = moment()
      .tz("Africa/Nairobi")
      .format("h:mm:ss [<small>]A[</small>]");
  }

  let munichElement = document.querySelector("#munich");
  if (munichElement) {
    let munichTimeElement = document.querySelector("#munich .time");
    let munichDateElement = document.querySelector("#munich .date");

    munichDateElement.innerHTML = moment()
      .tz("Europe/Berlin")
      .format("MMMM Do YYYY");
    munichTimeElement.innerHTML = moment()
      .tz("Europe/Berlin")
      .format("h:mm:ss [<small>]A[</small>]");
  }

  let maldivesElement = document.querySelector("#maldives");
  if (maldivesElement) {
    let maldivesTimeElement = document.querySelector("#maldives .time");
    let maldivesDateElement = document.querySelector("#maldives .date");

    maldivesDateElement.innerHTML = moment()
      .tz("Indian/Maldives")
      .format("MMMM Do YYYY");
    maldivesTimeElement.innerHTML = moment()
      .tz("Indian/Maldives")
      .format("h:mm:ss [<small>]A[</small>]");
  }
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="cities">
          <div>
            <h2>${cityName}</h2>
            <div class="date" >${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</div>
        </div>
        `;
}

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
