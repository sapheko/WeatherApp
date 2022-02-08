$(document).ready(function(){

})

var CallBackGetSuccess = function(data){
    console.log("Donnée API", data)
    console.log("Meteo temp", (data.main.temp - 273.15).toFixed(2))

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