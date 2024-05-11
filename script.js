const apiUrl="https://api.weatherapi.com/v1/current.json?key=";
const apiKey="ec8dcf6a04d64243a8b152538240705";
var input=document.querySelector("#cityName");
var searchBtn=document.querySelector("#search");
var cityName="London";
var image=document.querySelector("#weather");
var cardColor=document.querySelector(".card");
async function weather(cityName){
    const response=await fetch(apiUrl + apiKey + `&q=${cityName}&aqi=yes`);
    var data=await response.json();

    console.log(data);

    document.querySelector("#humidity").innerHTML=data.current.humidity;
    document.querySelector("#temperature").innerHTML=data.current.temp_c+"°c";
    document.querySelector("#windspeed").innerHTML=data.current.wind_kph+" kph";
    document.querySelector("#precipitation").innerHTML=data.current.precip_in;
    document.querySelector("#city").innerHTML=data.location.name;
    if (data.current.condition.text == "Partly cloudy"){
        image.src="elseee.png";
        cardColor.style.backgroundColor="linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);";

    }
    else if(data.current.condition.text == "Clear"){
        image.src="clear.png";
        cardColor.style.backgroundImage=" linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)";
    }
    else if(data.current.condition.text == "Sunny"){
        image.src="sunny.png";
        cardColor.style.backgroundImage="linear-gradient(to right, #f83600 0%, #f9d423 100%)";
    }
    else{
        image.src="elseee.png";
        cardColor.style.backgroundImage="linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)";
    }
    



}
weather(cityName);
searchBtn.addEventListener("click",()=>{
    cityName=input.value;
    weather(cityName);

});
