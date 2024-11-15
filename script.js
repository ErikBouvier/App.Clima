const urlBase = `https://api.openweathermap.org/data/2.5/weather`
const API_KEY = 'API_KEY'
const diffKelvin = 273.15

document.getElementById('searchButton').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if(city){
        fetchWeather(city)
    }else{
        alert('Please enter a city')
    }
})

function fetchWeather(city){
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`)
    .then(data => data.json())
    .then(data => showWeather(data));
}

function showWeather(data){
    const divResponseData = document.getElementById('responseData')
    divResponseData.innerHTML = ''

    const cityName = data.name;
    const country = data.sys.country;
    const temp = data.main.temp - diffKelvin;
    const feelsLike = data.main.feels_like - diffKelvin;
    const pressure = data.main.pressure;
    const humidity = data.main.humidity;
    const wind = data.wind.speed;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    const cityInfo = document.createElement('h2');
    cityInfo.textContent = `${cityName}, ${country}`;

    const tempInfo = document.createElement('p');
    tempInfo.textContent = `Temperatura: ${Math.floor(temp)}°C`;

    const feelsLikeInfo = document.createElement('p');
    feelsLikeInfo.textContent = `Sensación térmica: ${Math.floor(feelsLike)}°C`;

    const pressureInfo = document.createElement('p');
    pressureInfo.textContent = `Presión: ${pressure} hPa`;

    const humidityInfo = document.createElement('p');
    humidityInfo.textContent = `Humedad: ${humidity}%`;

    const windInfo = document.createElement('p');
    windInfo.textContent = `Viento: ${wind} m/s`;

    const descriptionInfo = document.createElement('p');
    descriptionInfo.textContent = description.toUpperCase();

    const iconInfo = document.createElement('img');
    iconInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    divResponseData.appendChild(cityInfo);
    divResponseData.appendChild(tempInfo);
    divResponseData.appendChild(feelsLikeInfo);
    divResponseData.appendChild(pressureInfo);
    divResponseData.appendChild(humidityInfo);
    divResponseData.appendChild(windInfo);
    divResponseData.appendChild(iconInfo);
    divResponseData.appendChild(descriptionInfo);
}

