const buttonSubmit = document.getElementById('btn');
const locationInput = document.getElementById('location-input');
const locationOutput = document.getElementById('location-output');
const currentTemp = document.getElementById('temp');
const weatherForecast = document.getElementById('forecast');

buttonSubmit.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+locationInput.value+'&appid=22cfed71cc8e327155b535e0103ea6ca')
    .then(response => response.json())
    .then(data => {
        let locationValue = data['name'];
        let tempValue = data['main']['temp'];
        let forecastValue = data['weather']['0']['description'];

        locationOutput.innerText = locationValue;
        currentTemp.innerText = tempValue;
        weatherForecast.innerText = forecastValue;
    })
    .catch(error => console.log(error))
})
