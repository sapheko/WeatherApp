$(document).ready(function(){

})

var CallBackGetSuccess = function(data){
    console.log("Donnée API", data)
    console.log("Meteo temp", (data.main.temp - 273.15).toFixed(2))
}

function GetMeteo() {

    var strApiKey = "23b8f9bcd8218afa0cecd672a2b8a198"
    var strVille = "Colmar"
    var strUrl = "https://api.openweathermap.org/data/2.5/weather?q="+ strVille +"&appid=" + strApiKey

    // console.log(strUrl)

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