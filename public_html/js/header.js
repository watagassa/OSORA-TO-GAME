// img要素を生成
let weather_img= document.createElement('img');
// classを追加
weather_img.className = 'weather-img';

let weather = "";
console.log('デバッグ用log');
console.log('localStorage.setItem("Weather","Clear");');
console.log('localStorage.setItem("Weather","Rain");\n');
console.log('localStorage.setItem("Weather","Snow");\n');
console.log('localStorage.setItem("Weather","Clouds");\n');
console.log('localStorage.setItem("Weather","Mist");\n');
console.log('localStorage.setItem("Weather","Haze");\n');
console.log('localStorage.setItem("Weather","noImage");\n');
console.log('localStrageの初期化');
console.log('localStorage.clear();');
console.log('localStrageに適当な値を入れる');
console.log('localStorage.setItem("Weather","Clear");localStorage.setItem("ShootingScore",100);localStorage.setItem("PuzzleScore",25);');

try{
 weather = localStorage.getItem("Weather");
 console.log("weather ="+weather);
}catch{
    localStorage.setItem("Weather","noImage");
}
switch (weather) { //上記で取得したjsonに含まれている天気情報によって天気アイコンを変更
    case 'Clear':
        weather_img.src = 'img_weather/clear.png';
        break;

    case 'Rain':
        weather_img.src = 'img_weather/rain.png';
        break;
        
    case 'Snow':
        weather_img.src = 'img_weather/snow.png';
        break;
        
    case 'Clouds':
        weather_img.src = 'img_weather/cloud.png';
        break;

    case 'Mist':
        weather_img.src = 'img_weather/mist.png';
        break;

    case 'Haze':
        weather_img.src = 'img_weather/mist.png';
        break;
    case 'noImage':
        weather_img.src = 'img-shooting/choju23_0030_1.png';
        break;
    default:
        weather_img.src ='img-shooting/choju23_0030_1.png';
}
weather_img.style.height = "100px";
document.getElementById("logo-div").appendChild(weather_img);