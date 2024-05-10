const main = document.querySelector('.main'); // HTML要素containerを取得
const search = document.querySelector('.search-box button'); //HTML要素serch-box buttonを取得
const weatherBox = document.querySelector('.weather-box'); //HTML要素weather-boxを取得
const weatherDetails = document.querySelector('.weather-details'); //HTML要素weather-detailsを取得
const error404 = document.querySelector('.not-found'); //HTML要素not-foundを取得
const cityHide = document.querySelector('.city-hide'); //HTML要素city-hideを取得


search.addEventListener('click', () => { //検索ボタンをクリックした時に処理
    
    const APIKey = '6beeca1697c0c1b265fa0d5b5075604a'; //openweatherAPIのAPIkey
    const city = document.querySelector('.search-box input').value; //検索の入力を取得

    if (city == '') //ユーザーが何も入力せずに検索ボタンをクリックした場合、処理を中断
        return; 

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`) //fetch()によって指定されたURLにGETリクエストを送信し、OpenWeatherMap APIのURLにユーザーが入力した都市名 (city) とAPIキー (APIKey) を埋め込んでいる。
    .then(response => response.json()).then(json => { //.then() メソッドを使用して、サーバーからの応答を処理。最初の .then() メソッドは、HTTP応答をJSON形式に解析するもの。
        // .then() メソッドのチェーンを使って、JSON形式の天気情報を受け取った後の処理を指定。json データを引数として取り、天気情報を表示するためのコードが含まれている。
        
        if (json.cod == '404') {
            cityHide.textContent = city;
            main.style.height = '400px';
            weatherBox.classList.remove('active');
            weatherDetails.classList.remove('active');
            error404.classList.add('active');
            return;
        }

        const image = document. querySelector('.weather-box img');
        const temperature = document. querySelector('.weather-box .temperature');
        const description = document. querySelector('.weather-box .description');
        const humidity  = document. querySelector('.weather-details .humidity span');
        const wind = document. querySelector('.weather-details .wind span');

        if (cityHide.textContent == city) {
            return;
        } else {
            cityHide.textContent = city;

            main.style.height = '555px';
            main.classList.add('active');
            weatherBox.classList.add('active');
            weatherDetails.classList.add('active');
            error404.classList.remove('active');

            setTimeout(() => {
                main.classList.remove('active');
            }, 2500);

            switch (json.weather[0].main) { //上記で取得したjsonに含まれている天気情報によって天気アイコンを変更
                case 'Clear':
                    image.src = 'img_weather/clear.png';
                    break;
    
                case 'Rain':
                    image.src = 'img_weather/rain.png';
                    break;
                    
                case 'Snow':
                    image.src = 'img_weather/snow.png';
                    break;
                    
                case 'Clouds':
                    image.src = 'img_weather/cloud.png';
                    break;
    
                case 'Mist':
                    image.src = 'img_weather/mist.png';
                    break;
    
                case 'Haze':
                    image.src = 'img_weather/mist.png';
                    break;
                    
                default:
                    image.src ='img_weather/cloud.png';
            }
    
            //jsonに含まれた情報によってHTMLの表記を変更
            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            const infoWeahter = document.querySelector('.info-weather');
            const infoHumidity = document.querySelector('.info-humidity');
            const infoWind = document.querySelector('.info-wind');

            const elCloneInfoWeather = infoWeahter.cloneNode(true);
            const elCloneInfoHumidity = infoHumidity.cloneNode(true);
            const elCloneInfoWind = infoWind.cloneNode(true);

            elCloneInfoWeather.id = 'clone-info-weather';
            elCloneInfoWeather.classList.add('active-clone');

            elCloneInfoHumidity.id = 'clone-info-humidity';
            elCloneInfoHumidity.classList.add('active-clone');

            elCloneInfoWind.id = 'clone-info-wind';
            elCloneInfoWind.classList.add('active-clone');

            setTimeout (() => {
                infoWeahter.insertAdjacentElement("afterend", elCloneInfoWeather);
                infoHumidity.insertAdjacentElement("afterend", elCloneInfoHumidity);
                infoWind.insertAdjacentElement("afterend", elCloneInfoWind);
            },2200);

            const cloneInfoWeather = document.querySelectorAll('.info-weather.active-clone');
            const totalCloneInfoWeather = cloneInfoWeather.length;
            const cloneInfoWeatherFirst = cloneInfoWeather[0];

            const cloneInfoHumidity = document.querySelectorAll('.info-humidity.active-clone');
            const cloneInfoHumidityFirst = cloneInfoHumidity[0];

            const cloneInfoWind = document.querySelectorAll('.info-wind.active-clone');
            const cloneInfoWindFirst = cloneInfoWind[0];

            if (totalCloneInfoWeather > 0) {
                cloneInfoWeatherFirst.classList.remove('active-clone');
                cloneInfoHumidityFirst.classList.remove('active-clone');
                cloneInfoWindFirst.classList.remove('active-clone');

                setTimeout(() => {
                    cloneInfoWeatherFirst.remove();
                    cloneInfoHumidityFirst.remove();
                    cloneInfoWindFirst.remove();
                }, 2200);

            }
        }


    });

});

