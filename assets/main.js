var searchArray = [];
  

/// declaring j  globally so can push new buttons to the DOM when a new name variable is added to searchArray
var j = -1;
function submit() {
    var name = $("#searchInput").val();
    
    
    searchArray.push(name.toUpperCase());
    
/// increments the index of search array when a new name variable is added       
    j++
/// appends a button to the DOM   
    $("#search").append("<button class='favorites' data-person='" + searchArray[j] + "'>" + searchArray[j] + "</button>")
  
     
}





// $("button").on("click", function () {
//     $("#gifDiv").empty()
//     var input = searchArray;
//     console.log(searchArray)
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//         input + "&api_key=dc6zaTOxFJmzC&limit=10";

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     })
//         .then(function (response) {
//             var results = response.data;

//             for (var i = 0; i < results.length; i++) {
//                 var gifDiv = $("<div>");

//                 var rating = results[i].rating;

//                 var p = $("<p>").text("Rating: " + rating);

//                 var personImage = $("<img>");
//                 personImage.attr("src", results[i].images.fixed_height.url);

//                 gifDiv.prepend(p);
//                 gifDiv.prepend(personImage);

//                 $("#gifDiv").prepend(gifDiv);
//             }
//         });
// });





$("#search").on("click", ".favorites", function () {
    $("#gifDiv").empty()
    var person = $(this).text();
    console.log(person)
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=dc6zaTOxFJmzC&limit=10";

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