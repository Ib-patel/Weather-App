const container  = document.querySelector(".container");
const search  = document.querySelector(".search-box button");
const weatherBox  = document.querySelector(".weather-box");
const weatherdetails = document.querySelector(".weather-details");
const error404 = document.querySelector(".not-found");


search.addEventListener('click', () => {
     
    const APIkey = "61a5c3eebd730b81e9c1e789037d8c16";
    const city = document.querySelector(".search-box input").value;


    if(city == '')
        return;

     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`).then(response  => response.json()).then(json => {
       
        if(json.cod == '404')
        {
            container.style.height = '400px';
            weatherBox.classList.remove('active');
            weatherdetails.classList.remove('active');
            error404.classList.add('active');
            return;
        }

        container.style.height = '555px';
        weatherBox.classList.add('active');
        weatherdetails.classList.add('active');
        error404.classList.remove('active');

        const image = document.querySelector(".weather-box img");    
        const temperature = document.querySelector(".weather-box .temperature");    
        const description = document.querySelector(".weather-box .description");   
        const humidity = document.querySelector(".weather-details .humidity span");    
        const wind = document.querySelector(".weather-details .wind span");     


            switch (json.weather[0].main) 
            {
           
                case 'Clear':
                    image.src = 'images/clear.png';
                    break;
                
                case 'Rain':
                    image.src = 'images/rain.png';
                    break;
    
                case 'Cloud':
                    image.src = 'images/clouds.png';
                    break;
                    
                case 'Mist':
                    image.src = 'images/mist.png';
                    break;     
                
                case 'Drizzle':
                    image.src = 'images/drizzle.png';
                    break;
    
                default:
                    image.src = 'images/clouds.png';
                    break;
           
            }
             
            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;


            

        });

    });    


