const cityName = document.getElementById('cityName');
const submitbtn = document.getElementById('submitbtn');

const city_name = document.getElementById('city_name');

const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');

const day = document.getElementById('day');


const apiKey = '89ee74f0938df1246708a07891b312b9' 

const currentDate = new Date();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDayOfWeek = daysOfWeek[currentDate.getDay()];
day.innerText = `${currentDayOfWeek}`;

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;

    

    if (cityVal === "") {
        city_name.innerText = `Please Write the Name of City Before Search`;
    } else {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=${apiKey}&units=metric`;
        try {
            const response = await fetch(url);
            const data = await response.json();

            
                const temperature = data.main.temp;
                city_name.innerText = `Temperature in ${cityVal}`;
                temp.innerText = `${temperature} °C`;
                // temp_status.innerText = data.weather[0].main;

                const tempmood = data.weather[0].main;
                if(tempmood == "Clear"){
                    temp_status.innerHTML = 
                    "<i class='fas fa-sun'></i> ";
                }else if(tempmood == "Clouds"){
                    temp_status.innerHTML = 
                    "<i class='fas fa-cloud'></i> ";
                }else if(tempmood =="Rain"){
                    temp_status.innerHTML = 
                    "<i class='fas fa-cloud-rain'></i> ";
                }else{
                    temp_status.innerHTML = 
                    "<i class='fas fa-sun'></i> ";
                }

           
        } catch (error) {
            console.error("Error fetching data from the API: ", error);
        }
    }
}

submitbtn.addEventListener('click', getInfo);
