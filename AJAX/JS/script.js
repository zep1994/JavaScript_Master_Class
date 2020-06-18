$(document).ready(function() {  
    $("#submit").on('click', function() {
        $.ajax({
            url: 'https://api.nasa.gov/planetary/apod?api_key=lEuG08FTmJLg17cvemAzUrErh4gulvFkvipkG6H4',
            contentType: "application/json",
            dataType: 'json',
            success: function(result){
                $('#posted').append("<p>" + result.explanation + "</p>")
            }
        })
    })
})