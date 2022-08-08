$(document).ready(function(){})
function display(result){
  document.getElementById("result").innerHTML = result;
}


  /* Task 1 */

  window.addEventListener("load", getWeather);

  let weatherBlock = document.getElementById("weather-block");

  async function getWeather(e){
    let server = "http://api.weatherapi.com/v1/forecast.json?key=06d4f3f56bde41a2bfe113334222906&q=46.98.183.210&days=5&aqi=no&alerts=no";
    let response = await fetch(server, {method: "GET",})
    let responseResult = await response.json();

    if (response.ok){
      displayWeather(responseResult)
    }
    else{
      weatherBlock.innerHTML = responseResult.message;
    }
  }

  function dayOfWeek(date){
    const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const d = new Date(date.split("-"));
    return weekday[d.getDay()];
  }

  function displayWeather(data){
    console.log(data);
    weatherBlock.innerHTML =`
  <div class="current">
      <div class="location-time">
          <div class="location">
              <span id="city">${data.location.name}</span>, <span id="country">${data.location.country}</span>
          </div>
          <div class="time-date">${data.current.last_updated}</div>
      </div>
      <div class="data">
          <div class="icon"><img src="${data.current.condition.icon}" alt=""><span class="icon-desc">${data.current.condition.text}</span></div>
          <div class="temperature">${data.current.temp_c} &#8451;</div>
          <div class="precise">
              <div class="wind">Wind: ${data.current.wind_kph} km/h</div>
              <div class="precip">Precip: ${data.current.precip_mm} mm</div>
              <div class="pressure">Pressure: ${data.current.pressure_mb} mb</div>
          </div>
      </div>
  </div>
  <div class="forecast">
      <aside>
          <div class="day">${dayOfWeek(data.forecast.forecastday[0].date)}</div>
          <div class="date">${data.forecast.forecastday[0].date}</div>
          <div class="icon"><img src="${data.forecast.forecastday[0].day.condition.icon}" alt=""></div>
          <div class="temperature">${data.forecast.forecastday[0].day.avgtemp_c} &#8451;</div>
      </aside>
      <aside>
          <div class="day">${dayOfWeek(data.forecast.forecastday[1].date)}</div>
          <div class="date">${data.forecast.forecastday[1].date}</div>
          <div class="icon"><img src="${data.forecast.forecastday[1].day.condition.icon}" alt=""></div>
          <div class="temperature">${data.forecast.forecastday[1].day.avgtemp_c} &#8451;</div>
      </aside>
      <aside>
          <div class="day">${dayOfWeek(data.forecast.forecastday[2].date)}</div>
          <div class="date">${data.forecast.forecastday[2].date}</div>
          <div class="icon"><img src="${data.forecast.forecastday[2].day.condition.icon}" alt=""></div>
          <div class="temperature">${data.forecast.forecastday[2].day.avgtemp_c} &#8451;</div>
      </aside>
  </div>`    
  }



  





