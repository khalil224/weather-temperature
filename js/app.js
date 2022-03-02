const API_KEY = `1c4728d8a3d17332f04818c1a9461a2d`;

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;


    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))

}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = (temperature) => {
    setInnerText('city', temperature.name)
    setInnerText('temperature', temperature.main.temp)
    setInnerText('condition', temperature.weather[0].main)
    //set weather icon
    const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const weatherIcon = document.getElementById('icon');
    weatherIcon.setAttribute('src', url);
    console.log(temperature)
}