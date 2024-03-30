$(document).ready(function(){
    $('#four').click(function (){
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/users/2",
            method: "GET",
            dataType: "json",
            success: function(response){
                // code to handle successful response
                $LowerCase = response.name.toLowerCase();

                $('div').text("Output : " + $LowerCase);
            },
            error: function(xhr, status, error){
                // code to handle error response
                console.error(status, error);
            }
        });
    });
});