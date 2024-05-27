// background-image: url("../url(img-shooting/choju23_0030_1.png)");
// background-repeat: no-repeat;
// background-size: cover;
let body = document.querySelector("body");
try{
    const weather = localStorage.getItem("Weather");
   }catch{
       localStorage.setItem("Weather","noImage");
   }
   switch (weather) { //上記で取得したjsonに含まれている天気情報によって天気アイコンを変更
       case 'Clear':
           body.style.backgroundImage = 'url(img_weather/clear.png)';
           break;
   
       case 'Rain':
           body.style.backgroundImage = 'url(img_weather/rain.png)';
           break;
           
       case 'Snow':
           body.style.backgroundImage = 'url(img_weather/snow.png)';
           break;
           
       case 'Clouds':
           body.style.backgroundImage = 'url(img_weather/cloud.png)';
           break;
   
       case 'Mist':
           body.style.backgroundImage = 'url(img_weather/mist.png)';
           break;
   
       case 'Haze':
           body.style.backgroundImage = 'url(img_weather/mist.png)';
           break;
       case 'noImage':
           body.style.backgroundImage = 'url(img-shooting/choju23_0030_1.png)';
           break;
       default:
           body.style.backgroundImage ='url(img-shooting/choju23_0030_1.png)';
   }


body.style.background.replace = "no-repeat";
body.style.backgroundSize = "cover";