// Building the URL

function buildQueryURL() {
  var player = $("#playerSearch").val().trim();
  var queryURL = "https://www.balldontlie.io/api/v1/players?search=" + player;

  // Creates AJAX call for the specific name

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response)
    console.log(queryURL)

    // For loop to dynamically display results

    for (var i = 0; i < response.data.length; i++) {

      // Logging traversed JSON results

      console.log(response.data[i].first_name)
      console.log(response.data[i].last_name)
      console.log(response.data[i].position)
      console.log(response.data[i].team.full_name)
      console.log(response.data[i].height_feet + "'" + response.data[0].height_inches)
      console.log(response.data[i].weight_pounds)

      // Creating list element

      var item = $("<li>");

      item.addClass("toggleName")

      item.text(response.data[i].first_name + " " + response.data[i].last_name);

      $("#players-list").append(item);

      // Creating Div

      var newDiv = $("<div>");

      newDiv.addClass("playerDetails");

      newDiv.attr("style", "display: none;");

      // Creating img tag and applying attributes

      var image = $("<img>").attr("src", "imgassets/imgplaceholder.png");

      image.attr("style", "height: 100px; width: 100px; margin: 5px;")

      newDiv.append(image)

      // Making  a new Div with h4 and p tags

      var anotherDiv = $("<div>");

      var teamName = $("<h4>").attr("id", "teamName")

      var position = $("<p>").attr("id", "position")

      var height = $("<p>").attr("id", "heightAndWeight")

      // Appending the elements to the div's

      anotherDiv.append(teamName, position, height)

      newDiv.append(anotherDiv)

      // Displaying results from API

      $(teamName).text(response.data[i].team.full_name)

      $(position).text(response.data[i].position)

      $(height).text(response.data[i].height_feet + "'" + response.data[0].height_inches + "/" + response.data[i].weight_pounds + "lbs")

      // Adding the event listener to the li's

      $(item).on('click', function () {

        console.log("onclick")

        $(this).next().slideToggle(150);
      });

      // Appending the div to the html

      $("#players-list").append(newDiv)
    }



  }


  )
}

// Creating the function to clear input

function clear() {
  $("#playerSearch").val("");
}


// Adding the event listener to the Search button

$("#run-search").on("click", function (event) {

  event.preventDefault();

  // Remove any existing results
  $("li").remove();

  // Build the query URL for the ajax request to the  API
  buildQueryURL();

  // Empty the region associated with the input
  clear();

});




