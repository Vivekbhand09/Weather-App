
const apikey="c02d3df3fca7846058b08e857660597b";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon");

async function checkweather(city){
    const response=await fetch(apiurl + city+ `&appid=${apikey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        var data=await response.json();
        console.log(data);
         document.querySelector(".city").innerHTML=data.name;  
         document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C"; 
         document.querySelector(".humidity").innerHTML=data.main.humidity+"%"; 
         document.querySelector(".wind").innerHTML=data.wind.speed+" Km/h";  
        
        
        if(data.weather[0].main=="clouds"){
            weathericon.src="images/clouds.png";
        }
        else if(data.weather[0].main=="clear"){
            weathericon.src="images/clear.png";
        }
        else if(data.weather[0].main=="Rain"){
            weathericon.src="images/rain.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weathericon.src="images/rain.png";
        }
        else if(data.weather[0].main=="Mist"){
            weathericon.src="images/mist.png";
        }
        
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }



   



}


searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})

