// OpenWeatherMap API Key
const apiKey = '87a3a1d8611b3598ddddf467d6e956ed';
const defaultZip = '98133';
const baseURL = 'http://api.openweathermap.org/data/2.5/forecast?';
// 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}';

document.getElementById('generate').addEventListener('click', updateWeather);

function updateWeather(e){
    // const zip =  document.getElementById('zip').value;
    const zip = defaultZip; // TEMP until getting zip from app
    getWeather(baseURL, zip, apiKey)
}

const getWeather = async (baseURL, zip, apiKey)=>{
    console.log(`${baseURL}zip=${zip},us&APPID=${apiKey}`);
    const res = await fetch(`${baseURL}zip=${zip},us&APPID=${apiKey}`)
    try {
        const data = await res.json();
        console.log(data)
        return data;
    } catch(error) {
        console.log("error", error);
        // appropriately handle the error
    }
}