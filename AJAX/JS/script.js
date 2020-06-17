$(document).ready(function() {
    $.ajax({
        url: 'https://api.nasa.gov/planetary/apod?api_key=lEuG08FTmJLg17cvemAzUrErh4gulvFkvipkG6H4',
        data: data,
        dataType: 'json',
        success: function(data) {
            console.log(data)
        },
    })
})