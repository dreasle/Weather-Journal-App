// OpenWeatherMap API Key
const apiKey = '87a3a1d8611b3598ddddf467d6e956ed';
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?';

// Event listener for generate click event
document.getElementById('generate').addEventListener('click', updateApp);

// Function to run when generate button is clicked
function updateApp(e){
    // Get zip and feelings from UI
    const zip =  document.getElementById('zip').value;
    const feelings =  document.getElementById('feelings').value;

    // Get weather from api
    getWeather(baseURL, zip, apiKey)
    .then(function(data){
        // Update the data obj on the server
        const currentDate = new Date(data.dt*1000).toLocaleDateString("en-US");
        updateData('/save', {
            date: currentDate, 
            temp: data.main.temp,
            feelings: feelings
        });
    })
    .then(function(data){
        // Update the UI
        updateUI();
    });
}

// Async GET request
const getWeather = async (baseURL, zip, apiKey)=>{
    const res = await fetch(`${baseURL}zip=${zip},us&APPID=${apiKey}&units=imperial`)
    try {
        const data = await res.json();
        return data;
    } catch(error) {
        console.log("error", error);
    }
}

// Async POST request
const updateData = async ( url = '', data = {})=>{

    try {
        const response = await fetch(url, {
            method: 'POST', 
            credentials: 'same-origin', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
    } catch(error) {
        console.log("error", error);
    }
};

// Update the UI/HTML withe the server-side data obj.
const updateUI = async () => {
  const request = await fetch('/all');
  try {
    const newData = await request.json();
    document.getElementById('date').innerHTML = `Date: ${newData.date}`;
    document.getElementById('temp').innerHTML = `Temp: ${newData.temp} F`;
    document.getElementById('content').innerHTML = `Feelings: ${newData.feelings}`;
  } catch(error) {
    console.log("error", error);
  }
}