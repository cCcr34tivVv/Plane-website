var x1,x2,y1,y2

function getDate() {
    
    var today = new Date();

    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    
    document.getElementById("data").innerHTML = date + " " + time;

}

function getUrl() {

    var uurl = window.location.href;
    
    document.getElementById("url").innerHTML = uurl;
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    document.getElementById("location").innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  document.getElementById("location").innerHTML = "Latitudine: " + position.coords.latitude + "<br>Longitudine: " + position.coords.longitude;
}

function getBrowserName() {
  document.getElementById("browser_name").innerHTML = "Numele browser-ului este " + navigator.appName;
}

function getBrowserVersion() {
  document.getElementById("browser_version").innerHTML = "Versiunea browser-ului este " + navigator.appVersion;
}

function getOsName() {
  var Name = "Unknown OS";
  if (navigator.userAgent.indexOf("Win") != -1) Name = "Windows OS";
  if (navigator.userAgent.indexOf("Mac") != -1) Name = "Macintosh";
  if (navigator.userAgent.indexOf("Linux") != -1) Name = "Linux OS";
  if (navigator.userAgent.indexOf("Android") != -1) Name = "Android OS";
  if (navigator.userAgent.indexOf("like Mac") != -1) Name = "iOS";

  document.getElementById("os_name").innerHTML = "Nume sistem de operare " + Name;
}

function getCanvas(){
  var canvas = document.querySelector("#canvas_desen");   
  var context = canvas.getContext("2d");              
  var canvasWidth = canvas.width;                     
  var canvasHeight = canvas.height;

  const getCursorPosition = (canvas, event) => {
    const rect = canvas.getBoundingClientRect();
    x1 = event.clientX - rect.left;
    y1 = event.clientY - rect.top;
    console.log(x1, y1);
  }
  
  var ok=0;

  canvas.addEventListener('mousedown', (e) => {
    if(ok==0)
      {
        getCursorPosition(canvas, e);
        ok=1;
      }
    else
      {
        getCursorPosition2(canvas, e);
        ok=0;
        context.strokeStyle=culoare_contur.value;
        context.fillStyle=culoare_umplere.value;
        console.log(x1, y1,x2, y2);
        context.rect(x1, y1, x2-x1, y2-y1);
        context.stroke();
        context.fillRect(x1, y1, x2-x1, y2-y1);
      }
  })

  const getCursorPosition2 = (canvas, event) => {
    const rect = canvas.getBoundingClientRect();
    x2 = event.clientX - rect.left;
    y2 = event.clientY - rect.top;
    console.log(x2, y2);
  }

  //document.getElementById("canvas_prop").innerHTML = canvasWidth + " " + canvasHeight;
}

function getCuloareContur()
{
  let culoare_contur = document.getElementById('culoare_contur');
  culoare_contur.addEventListener('input', function() {  
   console.log(culoare_contur.value);
  });
}

function getCuloareUmplere()
{
  let culoare_umplere = document.getElementById('culoare_umplere');
  culoare_umplere.addEventListener('input', function() {  
   console.log(culoare_umplere.value);
  });
}

var interval;

function schimbaContinut (resursa, jsFisier, jsFunctie) {
  fetch(resursa + '.html').then(function(response) {
      return response.text();
  }).then(function(responseText) {
       document.getElementById ('continut').innerHTML = responseText;
          
       if (resursa === 'invat') {
        getDate();
        interval = setInterval(getDate, 1000);
        getUrl();
        getLocation();
        getBrowserName();
        getBrowserVersion();
        getOsName();
        getCanvas();
        tabel();
       }
       else if(resursa === 'cumparaturi')
       {
          worker();
          //console.log("da");
          viewTable();
          clearInterval(interval);
       }
       else{
         clearInterval(interval);
       }

       if (jsFisier) {
        var elementScript = document.createElement('script');
        elementScript.onload = function () {
          console.log("hello");
          if (jsFunctie) {
            window[jsFunctie]();
          }
        };
        elementScript.src = jsFisier;
        document.head.appendChild(elementScript);
      } else {
        if (jsFunctie) {
          window[jsFunctie]();
        }
      }
  });
}
