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
    });
    // .then(function(data){

    // }


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

    const response = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    try {
    //   const newData = await response.json();
    //   return newData;
        console.log("Post res:", response);
    }catch(error) {
        console.log("error", error);
    }
};


// const updateUI = async () => {
//   const request = await fetch('/all');
//   try{
//     const allData = await request.json();
//     document.getElementById('animalName').innerHTML = allData[0].animal;
//     document.getElementById('animalFact').innerHTML = allData[0].facts;
//     document.getElementById('animalFav').innerHTML = allData[0].fav;

//   }catch(error){
//     console.log("error", error);
//   }
// }