
var box = $("#box");
var nom = $('#city');

$('#selec').click(function () {

    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?q=' + nom.val() + ',fr&appid=cfa29b5d4a44280d3dea3471a4ca4ac4',
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
        .always(function () { 
            console.log("complete");
            console.log(nom.val());
        });

});