$(document).ready(function() {

    $( "html" ).mouseenter(function() {

        if (!$('#circle').hasClass("circle")) {
            $('#circle').addClass("circle")
        }

        var mouseX = 0, mouseY = 0;
        var xp = 0, yp = 0;
         
        $(document).mousemove(function(e){
          mouseX = e.pageX - 15;
          mouseY = e.pageY - 15; 
        });
          
        setInterval(function(){
          xp += ((mouseX - xp)/6);
          yp += ((mouseY - yp)/6);
          $("#circle").css({left: xp +'px', top: yp +'px'});
        }, 20);
    })

    $( "html" ).mouseleave(function() {

        if ($('#circle').hasClass("circle")) {
            $('#circle').removeClass("circle")
        }

    })

  
});

var CallBackGetSuccess = function(data){
    console.log("Donnée API", data)

    var floatTemp = (data.main.temp - 273.15).toFixed(2)
    var strWeather = data.weather[0].main

    // $("#TempMin").append(floatTempMin)
    // $("#TempMax").append(floatTempMax)

    $("#Temp").prepend(floatTemp)

    if (floatTemp < 10) {
        $("#Temp").prepend(`<span class="iconify" data-icon="bi:thermometer-snow"></span>&ensp;`)
    } else {
        $("#Temp").prepend(`<span class="iconify" data-icon="bi:thermometer-sun"></span>&ensp;`)
    }

    if (strWeather == "Clouds") {
        $('.sun').hide()
    } else if (strWeather == "Sun" || strWeather == "Clear") {
        $('.petit').hide()
        $('#background-wrap').hide()
    } else if (strWeather == "rain") {
        $('#Meteo').addClass('weather rain')
    }
}

var strApiKey = "23b8f9bcd8218afa0cecd672a2b8a198"
var strVille = "Colmar,fr"
var strUrl = "https://api.openweathermap.org/data/2.5/weather?q="+ strVille +"&appid=" + strApiKey

if (strApiKey !== "") {

    $.get(strUrl, CallBackGetSuccess).done(function() {
        //alert("second success")
    })
    .fail(function (){
        alert("error")
    })
    .always(function(){
        //alert("finished")
    });

}