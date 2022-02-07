$(document).ready(function(){

})

var CallBackGetSuccess = function(data){
    console.log("Donnée API", data)
    console.log("Meteo temp", (data.main.temp - 273.15).toFixed(2))

    var floatTemp = (data.main.temp - 273.15).toFixed(2)
    var floatTempMin = (data.main.temp_min - 273.15).toFixed(2)
    var floatTempMax = (data.main.temp_max - 273.15).toFixed(2)

    // $("#TempMin").append(floatTempMin)
    // $("#TempMax").append(floatTempMax)
    // $("#Temp").append(floatTemp)
}

var strApiKey = "23b8f9bcd8218afa0cecd672a2b8a198"
var strVille = "Colmar,fr"
var strUrl = "https://api.openweathermap.org/data/2.5/weather?q="+ strVille +"&appid=" + strApiKey

$.get(strUrl, CallBackGetSuccess).done(function() {
    //alert("second success")
})
.fail(function (){
    alert("error")
})
.always(function(){
    //alert("finished")
});