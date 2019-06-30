var searchArray = [];
function submit() {
    var name = $("#searchInput").val();
    

    searchArray.push(name);
    
        
    $("#search").html("<div> " + searchArray.join(" ").toUpperCase() + "</div>")
    
}


    



$("button").on("click", function () {
    var input = searchArray;
    console.log(searchArray)
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        input + "&api_key=dc6zaTOxFJmzC&limit=3";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div>");

                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating);

                var personImage = $("<img>");
                personImage.attr("src", results[i].images.fixed_height.url);

                gifDiv.prepend(p);
                gifDiv.prepend(personImage);

                $("#gifDiv").prepend(gifDiv);
            }
        });
});