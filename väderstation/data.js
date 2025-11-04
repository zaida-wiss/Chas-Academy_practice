    export async function getWeather(city) {
     const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=59.33&lon=18.06&appid=d6f3a1a45529ce0b80572cc15116ba25
&units=metric&lang=sv")
  const data= await response.json();
  return data;
    }
    