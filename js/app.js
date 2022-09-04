const api_Key = `3e773a07670af1546d09b63aafe957e6`;

const loadTemperature = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_Key}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

const displayTemperature = (data) => {
//   const temperature = document.getElementById("temperature");
//   temperature.innerText = data.main.temp;
setInnerTextById('temperature',data.main.temp)
setInnerTextById('condition',data.weather[0].main)
  console.log(data.weather[0].main);
};

const setInnerTextById= (id,text) =>{
    const temperature = document.getElementById(id);
  temperature.innerText = text;
}

document.getElementById('btn-search').addEventListener('click',function(){
    const searchFiled=document.getElementById('search-field')
    const temp=searchFiled.value 
    document.getElementById('city').innerText=temp
    loadTemperature(temp)
})

loadTemperature("dhaka");
