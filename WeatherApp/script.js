


const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '954b662a3cmsh2683cd356976dc2p172242jsn8f3ebbcf683c',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const searchInput = document.querySelector('#searchInput')
const searchBtn = document.querySelector('#searchBtn')

async function Weatherapp(city){
    const response = await fetch(url + city ,options)
    const data =  await response.json()
    console.log(data)
document.querySelector('.city').innerHTML = city;
document.querySelector('.temp').innerHTML = data.temp + '°C';
document.querySelector('.humidity').innerHTML = data.humidity + ' %'
document.querySelector('.wind').innerHTML = data.wind_speed + " km/h"

}


searchBtn.addEventListener('click',()=>{
    Weatherapp(searchInput.value)
})



// function weatherApp(){
//     fetch(url, options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err=>console.log(err));

    
// }
// weatherApp()
