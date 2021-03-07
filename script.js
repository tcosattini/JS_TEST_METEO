




 

async function main () {

    const ip = await fetch('https://api.ipify.org?format=json')
        .then(resultat => resultat.json ())
        .then (json => json.ip)
    
        console.log (ip)
    const ville = await fetch(`http://api.ipstack.com/${ip}?access_key=114dd6d96c7c07854e5f250e1ddb8b3a`)
    
        .then (resultat => resultat.json ())
        .then (json => json.city)
        console.log (ville)
    const meteo = await fetch(`http://api.weatherapi.com/v1/current.json?key=cb1ecd31173145a98f3195004213001&q=${ville}`)
        
        .then (resultat => resultat.json ())
        .then (json => json)
                
       console.log (meteo);

    const forecast = await fetch (`http://api.weatherapi.com/v1/forecast.json?key=cb1ecd31173145a98f3195004213001&q=${ville}`) 
        
        .then (resultat => resultat.json())
        .then (json => json)

        console.log (forecast)
w (meteo, forecast);
    } 
function w (data) {

    
const name = data.location.name;
const temp = data.current.temp_c;
const descrp = data.current.condition.text;
const wind = data.current.wind_kph;


const forecast = data.forecast
document.querySelector ("#ville").textContent = name;
document.querySelector ('#temp').textContent = temp + ' '+ 'ºc';
document.querySelector ('#description').textContent = descrp;
document.querySelector ('#container_gauge1').textContent =wind+' '+ 'km/h';


console.log (name)
    
}

window.onload = main;






