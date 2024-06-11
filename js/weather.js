const main = document.querySelector('.main'); // HTML要素containerを取得
const search = document.querySelector('.search-box button'); //HTML要素serch-box buttonを取得
const weatherBox = document.querySelector('.weather-box'); //HTML要素weather-boxを取得
const weatherDetails = document.querySelector('.weather-details'); //HTML要素weather-detailsを取得
const sub = document.querySelector('.sub'); //HTML要素subを取得
const sub2 = document.querySelector('.sub-2'); //HTML要素su-2を取得
const error404 = document.querySelector('.not-found'); //HTML要素not-foundを取得
const cityHide = document.querySelector('.city-hide'); //HTML要素city-hideを取得

    //ローカルストレージからスコアの取得
    shootingHighScore = localStorage.getItem("ShootingScore");
    puzzleHighScore = localStorage.getItem("PuzzleScore");

    //nullの時の定義
    if (shootingHighScore === null) {
        shootingHighScore = 0;
    } else {
        shootingHighScore = parseInt(shootingHighScore); //整数に変換
    }
    
    //nullの時の定義
    if (puzzleHighScore === null) {
        puzzleHighScore = 1000;
    } else {
        puzzleHighScore = parseInt(puzzleHighScore); //整数に変換
    }

    //判定変数の初期値
    let judge1 = 0;
    let judge2 = 0;

    //シューティングスコアの判定
    if (shootingHighScore >= 30) {
        judge1 = 1;
    } else if (shootingHighScore < 30 && shootingHighScore >= 25 ){
        judge1 = 2;
    }else if (shootingHighScore < 25 && shootingHighScore >= 20) {
        judge1 = 3;
    } else if (shootingHighScore < 20 && shootingHighScore >= 15) {
        judge1 = 4;
    } else if (shootingHighScore < 15 && shootingHighScore >= 10 ){
        judge1 = 5;
    }

    //パズルスコアの判定
   if (puzzleHighScore <= 12) {
        judge2 = 1;
    } else if (puzzleHighScore > 12 && puzzleHighScore <= 15) {
        judge2 = 2;
    } else if (puzzleHighScore > 15 && puzzleHighScore <= 20) {
        judge2 = 3;
    }

    //シューティングのアチーブメント達成判定（背景色を変化）
    switch (judge1) {
        case 1:
            document.getElementById("achievement8").style.backgroundColor = "rgba(255, 255, 0, 0.7)";
            
        case 2:
            document.getElementById("achievement7").style.backgroundColor = "rgba(255, 255, 0, 0.7)";
            
        case 3:
            document.getElementById("achievement6").style.backgroundColor = "rgba(255, 255, 0, 0.7)";
            
        case 4:
            document.getElementById("achievement5").style.backgroundColor = "rgba(255, 255, 0, 0.7)";
            
        case 5:
            document.getElementById("achievement4").style.backgroundColor = "rgba(255, 255, 0, 0.7)";
            
    }


    //パズルのアチーブメント達成判定（背景色を変化）
    switch (judge2) {
        case 1:
            document.getElementById("achievement1").style.backgroundColor = "rgba(255, 255, 0, 0.7)";
            
        case 2:
            document.getElementById("achievement2").style.backgroundColor = "rgba(255, 255, 0, 0.7)";
            
        case 3:
            document.getElementById("achievement3").style.backgroundColor = "rgba(255, 255, 0, 0.7)";
            

    }
    //確認用
    console.log(shootingHighScore);
    console.log(puzzleHighScore);


//検索候補機能
document.addEventListener('DOMContentLoaded', function() {
    //配列の初期化
    let jsonData = [];

    // 外部のJSONファイルを取得
    fetch('data/city.list.json')
    .then(response => response.json())
    .then(data => {
        jsonData = data; // JSONデータを変数に格納
        console.log(jsonData);//確認用
    });

    document.getElementById('location-input').addEventListener('input', function() {
        let input = this.value.toLowerCase();  // 入力された文字を取得
        let datalist = document.getElementById('list');
        datalist.innerHTML = '';  // 以前の候補をクリア

        // 入力に一致する都市をフィルタリングして候補として追加
        jsonData.forEach(function(city) {
            if (city.name.toLowerCase().includes(input)) {
                let option = document.createElement('option');
                option.value = city.name;
                datalist.appendChild(option);
            }
        });
    });
});



search.addEventListener('click', () => { //検索ボタンをクリックした時に処理
    
    const APIKey = '6beeca1697c0c1b265fa0d5b5075604a'; //openweatherAPIのAPIkey
    const city = document.querySelector('.search-box input').value; //検索の入力を取得


    if (city == '') //ユーザーが何も入力せずに検索ボタンをクリックした場合、処理を中断
        return;



    //fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?id=${city}&appid=${APIKey}`)
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`) //fetch()によって指定されたURLにGETリクエストを送信し、OpenWeatherMap APIのURLにユーザーが入力した都市名 (city) とAPIキー (APIKey) を埋め込んでいる。
    .then(response => response.json()).then(json => { //.then() メソッドを使用して、サーバーからの応答を処理。最初の .then() メソッドは、HTTP応答をJSON形式に解析するもの。
        // .then() メソッドのチェーンを使って、JSON形式の天気情報を受け取った後の処理を指定。json データを引数として取り、天気情報を表示するためのコードが含まれている。
        
        //検索欄に正しい記述が無い場合または、検索候補が登録されていない場合のエラー画面表示＆レイアウト
        if (json.cod == '404') {
            cityHide.textContent = city;
            main.style.height = '400px';
            weatherBox.classList.remove('active');
            weatherDetails.classList.remove('active');
            sub.classList.remove('active');
            error404.classList.add('active');
            return;
        }

        //各HTML要素を取得
        const image = document. querySelector('.weather-box img');
        let body  = document.querySelector('body');
        const temperature = document. querySelector('.weather-box .temperature');
        const description = document. querySelector('.weather-box .description');
        const humidity  = document. querySelector('.weather-details .humidity span');
        const wind = document. querySelector('.weather-details .wind span');

        // ローカルストレージに天気情報を保管
        localStorage.setItem("Weather" ,json.weather[0].main);
        // 確認用
        console.log(localStorage.getItem("Weather"));
        

        if (cityHide.textContent == city) {
            return;
        } else {
            //前回入力された都市名と異なる場合に画面に天気情報を表示。
            cityHide.textContent = city;
            main.style.height = '555px';
            main.classList.add('active');
            weatherBox.classList.add('active');
            weatherDetails.classList.add('active');
            sub.classList.add('active');
            error404.classList.remove('active');
        
            setTimeout(() => {
                main.classList.remove('active');
            }, 2500);

            switch (json.weather[0].main) { //上記で取得したjsonに含まれている天気情報によって天気アイコンを変更
                case 'Clear':
                    image.src = 'img_weather/clear.png';
                    body.style.backgroundImage = 'url(img-back/background_clear.jpg)';
                    break;
    
                case 'Rain':
                    image.src = 'img_weather/rain.png';
                    body.style.backgroundImage = 'url(img-back/background_rain.png)';
                    break;
                    
                case 'Snow':
                    image.src = 'img_weather/snow.png';
                    body.style.backgroundImage = 'url(img-back/background_snow.jpg)';
                    break;
                    
                case 'Clouds':
                    image.src = 'img_weather/cloud.png';
                    body.style.backgroundImage = 'url(img-back/background_cloud.jpg)';
                    break;
    
                case 'Mist':
                    image.src = 'img_weather/mist.png';
                    body.style.backgroundImage = 'url(img-back/background_cloud.jpg)';
                    break;
    
                case 'Haze':
                    image.src = 'img_weather/mist.png';
                    body.style.backgroundImage = 'url(img-back/background_cloud.jpg)';
                    break;
                    
                default:
                    image.src ='img_weather/cloud.png';
                    body.style.backgroundImage = 'url(img-back/background_clear.jpg)';
            }

            const headWeather = document.querySelector('.weather-img');
            headWeather.src = image.src;
    
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


    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json()).then(json => {
        
            const weatherHourInfoElements = document.querySelectorAll('.weather-hour-info');
            weatherHourInfoElements.forEach((element, index) => {
                    const weatherInfo = json.list[index];
                    const weatherMain = weatherInfo.weather[0].main;
                    const temperature = weatherInfo.main.temp;

                    const img = element.querySelector('img');
                    const tempElement = element.querySelector('.temperature');

                    switch (weatherMain) {
                        case 'Clear':
                            img.src = 'img_weather/clear.png';
                            break;
                        case 'Rain':
                            img.src = 'img_weather/rain.png';
                            break;
                        case 'Snow':
                            img.src = 'img_weather/snow.png';
                            break;
                        case 'Clouds':
                            img.src = 'img_weather/cloud.png';
                            break;
                        case 'Mist':
                        case 'Haze':
                            img.src = 'img_weather/mist.png';
                            break;
                        default:
                            img.src = 'img_weather/cloud.png';
                    }
                    tempElement.innerHTML = `${temperature}<span>°C</span>`;
            });
        })
        .catch(error => console.error('Error fetching the weather data:', error
    ));

});
