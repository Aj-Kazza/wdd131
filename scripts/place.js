let temperature = 30;
let conditions = "Partly Cloudy";
let wind = "3";

const temperatureSpan = document.getElementById("temperature");
temperatureSpan.textContent = `${temperature}°C`;

const conditionsSpan = document.getElementById("conditions");
conditionsSpan.textContent = `${conditions}`;

const windSpan = document.getElementById("wind");
windSpan.textContent = `${wind} km/h`;

function getWindChill(wind, temperature) {
    if (wind <= 10 &&  temperature > 4.8){
        const windFactor = Math.pow(wind, 0.16);
        return 13.12 + (0.6215 * temperature) - (11.37 * windFactor) + (0.3955 * temperature * windFactor);
    }
    else {
        return "N/A"
    }
}

const windchillSpan = document.getElementById("wind-chill");
windchillSpan.innerText = getWindChill();