
var box = $("#box");
var nom = $('#city');

$('#selec').click(function () {

    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?q=' + nom.val() + ',fr&appid=2304ca0a4c5b96eca86deb93757adbfa',
        type: 'GET',
        dataType: 'json',
    })
        .done(function (res) {

            box.html("City: " + res.name + "</br>"
                + "Longitude: " + res.coord.lon + "</br>"
                + "Lattitude: " + res.coord.lat + "</br>"
                + "Wind: " + res.wind.speed + " Km/h </br>"
                + "Humidity: " + res.main.humidity + "</br>"
                + "Pressure: " + res.main.pressure + "</br>"
                + "Temperature: " + (((res.main.temp) - 273.15).toFixed(2)) + " °C</br>"
                + "Temperature Min: " + (((res.main.temp_min) - 273.15).toFixed(2)) + " °C</br>"
                + "Temperature Max: " + (((res.main.temp_max) - 273.15).toFixed(2)) + " °C</br>"
            );



        })
        .fail(function (err) {
            console.log(err);
        })
        .always(function () { // S'execute dans tous les cas!
            console.log("complete");
            console.log(nom.val());
        });

});