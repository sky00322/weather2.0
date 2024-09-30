let input = document.getElementById('input');
let btn =document.getElementById('btn');

let locate = document.getElementById('locate');
let tem = document.getElementById('temperature');

let humidity = document.getElementById('humidity');
let wind = document.getElementById('wind');
let feel = document.getElementById('feel');
let visibility = document.getElementById('visibility');
let pressure = document.getElementById('pressure');


btn.addEventListener('click', function(){
        
    locate.innerHTML = input.value;

    setInterval(() => {
        
   

    req = new XMLHttpRequest();

    req.open('GET',`https://api.weatherapi.com/v1/current.json?key=02df5fa0471a46aaab7142802242309&q=${input.value}&aqi=no`);
 
    req.onload=function(){
    console.log(req);
    myReq=req.responseText;

    data = JSON.parse(myReq);
    console.log(data);
    
        tem.innerHTML = data.current.temp_c +'℃';
        humidity.innerHTML = data.current.humidity +'%';
        wind.innerHTML = data.current.wind_kph +'kph';
        feel.innerHTML = data.current.feelslike_c +'°';
        visibility.innerHTML = data.current.vis_km +'km';
        pressure.innerHTML = data.current.pressure_mb +'mb';
        index.innerHTML = data.current.uv +'mw';
        locate.innerHTML=data.location.name;
 
    
    
}

req.send()
}, 1000);
});