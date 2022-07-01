const link = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "&appid=58b61031367081ce29b230265663b321";

let button = document.querySelector('.find-weather-btn');

// document.querySelector(".find-weather-btn").onclick = () =>{
//     city = document.querySelector(".input-city").value;
// }; 

function getData(){
  if(button.onclick){
    return document.querySelector('.input-city').value;
  }
}

const fetchData = async () => {

  let city = getData();
  const result = await fetch(`${link}${city}${apiKey}`);
  const data = await result.json();

  console.log(data);
}

let city = getData();
console.log(city);
fetchData();