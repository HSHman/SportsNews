// Building the URL

function buildQueryURL() {
  var player = $("#playerSearch").val().trim();
  var queryURL = "https://www.balldontlie.io/api/v1/players?search=" + player;


  document.querySelector("#player-results").style.display = "block";


    // ANCHOR 
    $(function() {
      $(document).scrollTop( $(".playercontainer").offset().top );  
  });
  // ANCHOR 
  
  // Creates AJAX call for the specific name

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response)
    console.log(queryURL)

    // For loop to dynamically display results

    for (var i = 0; i < response.data.length; i++) {

      

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

      
      if (response.data[i].team.full_name === 'Atlanta Hawks') {
        var image = $("<img>").attr("src", "assets/images/atlanta-hawks.png");
  
        image.attr("style", "height: 75px; width: 100px; margin: 5px;")
  
        newDiv.append(image)
        
      } else if (response.data[i].team.full_name === 'Boston Celtics') {
        var image = $("<img>").attr("src", "assets/images/boston-celtics.png");
  
        image.attr("style", "height: 75px; width: 100px; margin: 5px;")
  
        newDiv.append(image)
      } else if (response.data[i].team.full_name === 'Brooklyn Nets') {
        var image = $("<img>").attr("src", "assets/images/brooklyn-nets.png");
  
        image.attr("style", "height: 75px; width: 100px; margin: 5px;")
  
        newDiv.append(image)
      } else if (response.data[i].team.full_name === 'Charlotte Hornets') {
        var image = $("<img>").attr("src", "assets/images/charlotte-hornets.png");
  
        image.attr("style", "height: 75px; width: 100px; margin: 5px;")
  
        newDiv.append(image)
      } else if (response.data[i].team.full_name === 'Chicago Bulls') {
        var image = $("<img>").attr("src", "assets/images/chicago-bulls.png");
  
        image.attr("style", "height: 75px; width: 100px; margin: 5px;")
  
        newDiv.append(image)
      } else if (response.data[i].team.full_name === 'Cleveland Cavaliers') {
        var image = $("<img>").attr("src", "assets/images/cleveland-cavaliers.png");
  
        image.attr("style", "height: 75px; width: 100px; margin: 5px;")
  
        newDiv.append(image)
      } else if (response.data[i].team.full_name === 'Dallas Mavericks') {
        var image = $("<img>").attr("src", "assets/images/dallas-mavericks.png");
  
        image.attr("style", "height: 75px; width: 100px; margin: 5px;")
  
        newDiv.append(image)
      } else if (response.data[i].team.full_name === 'Denver Nuggets') {
        var image = $("<img>").attr("src", "assets/images/denver-nuggets.png");
  
        image.attr("style", "height: 75px; width: 100px; margin: 5px;")
  
        newDiv.append(image)
      } else if (response.data[i].team.full_name === 'Detroit Pistons') {
        var image = $("<img>").attr("src", "assets/images/detroit-pistons.png");
  
        image.attr("style", "height: 75px; width: 100px; margin: 5px;")
  
        newDiv.append(image)
      } else if (response.data[i].team.full_name === 'Golden State Warriors') {
        var image = $("<img>").attr("src", "assets/images/Gsw.png");
  
        image.attr("style", "height: 75px; width: 100px; margin: 5px;")
  
        newDiv.append(image)
      } else if (response.data[i].team.full_name === 'Houston Rockets') {
        var image = $("<img>").attr("src", "assets/images/houston-rockets.png");
  
        image.attr("style", "height: 75px; width: 100px; margin: 5px;")
  
        newDiv.append(image)
      } else if (response.data[i].team.full_name === 'Indiana Pacers') {
        var image = $("<img>").attr("src", "assets/images/indiana-pacers.png");
  
        image.attr("style", "height: 75px; width: 100px; margin: 5px;")
  
        newDiv.append(image)
      } else if (response.data[i].team.full_name === 'LA Clippers') {
        var image = $("<img>").attr("src", "assets/images/la-clippers.png");
  
        image.attr("style", "height: 75px; width: 100px; margin: 5px;")
  
        newDiv.append(image)
      } else if (response.data[i].team.full_name === 'Los Angeles Lakers') {
        var image = $("<img>").attr("src", "assets/images/la-lakers.png");
  
        image.attr("style", "height: 75px; width: 100px; margin: 5px;")
  
        newDiv.append(image)
      } else if (response.data[i].team.full_name === 'Memphis Grizzlies') {
        var image = $("<img>").attr("src", "assets/images/memphis-grizzlies.png");
  
        image.attr("style", "height: 75px; width: 100px; margin: 5px;")
  
        newDiv.append(image)
      } else if (response.data[i].team.full_name === 'Miami Heat') {
        var image = $("<img>").attr("src", "assets/images/miami-heat.png");
  
        image.attr("style", "height: 75px; width: 100px; margin: 5px;")
  
        newDiv.append(image)
      } else if (response.data[i].team.full_name === 'Milwaukee Bucks') {
        var image = $("<img>").attr("src", "assets/images/milwaukee-bucks.png");
  
        image.attr("style", "height: 75px; width: 100px; margin: 5px;")
  
        newDiv.append(image)
      } else if (response.data[i].team.full_name === 'Minnesota Timberwolves') {
        var image = $("<img>").attr("src", "assets/images/minnesota-timberwolves.png");
  
        image.attr("style", "height: 75px; width: 100px; margin: 5px;")
  
        newDiv.append(image)
      } else if (response.data[i].team.full_name === 'New Orleans Pelicans') {
        var image = $("<img>").attr("src", "assets/images/no-pelicans.png");
  
        image.attr("style", "height: 75px; width: 100px; margin: 5px;")
  
        newDiv.append(image)
      } else if (response.data[i].team.full_name === 'New York Knicks') {
        var image = $("<img>").attr("src", "assets/images/ny-knicks.png");
  
        image.attr("style", "height: 75px; width: 100px; margin: 5px;")
  
        newDiv.append(image)
      } else if (response.data[i].team.full_name === 'Oklahoma City Thunder') {
        var image = $("<img>").attr("src", "assets/images/okc-thunder.png");
  
        image.attr("style", "height: 75px; width: 100px; margin: 5px;")
  
        newDiv.append(image)
      } else if (response.data[i].team.full_name === 'Orlando Magic') {
        var image = $("<img>").attr("src", "assets/images/orlando-magic.png");
  
        image.attr("style", "height: 75px; width: 100px; margin: 5px;")
  
        newDiv.append(image)
      } else if (response.data[i].team.full_name === 'Pheonix Suns') {
        var image = $("<img>").attr("src", "assets/images/pheonix-suns.png");
  
        image.attr("style", "height: 75px; width: 100px; margin: 5px;")
  
        newDiv.append(image)
      } else if (response.data[i].team.full_name === 'Philadelphia 76ers') {
        var image = $("<img>").attr("src", "assets/images/philadelphia-76ers.png");
  
        image.attr("style", "height: 75px; width: 100px; margin: 5px;")
  
        newDiv.append(image)
      } else if (response.data[i].team.full_name === 'Portland Trail Blazers') {
        var image = $("<img>").attr("src", "assets/images/portland-trailblazers.png");
  
        image.attr("style", "height: 75px; width: 100px; margin: 5px;")
  
        newDiv.append(image)
      } else if (response.data[i].team.full_name === 'Sacramento Kings') {
        var image = $("<img>").attr("src", "assets/images/sacramento-kings.png");
  
        image.attr("style", "height: 75px; width: 100px; margin: 5px;")
  
        newDiv.append(image)
      } else if (response.data[i].team.full_name === 'San Antonio Spurs') {
        var image = $("<img>").attr("src", "assets/images/sa-spurs.png");
  
        image.attr("style", "height: 75px; width: 100px; margin: 5px;")
  
        newDiv.append(image)
      } else if (response.data[i].team.full_name === 'Toronto Raptors') {
        var image = $("<img>").attr("src", "assets/images/toronto-raptors.png");
  
        image.attr("style", "height: 75px; width: 100px; margin: 5px;")
  
        newDiv.append(image)
      } else if (response.data[i].team.full_name === 'Utah Jazz') {
        var image = $("<img>").attr("src", "assets/images/utah-jazz.png");
  
        image.attr("style", "height: 75px; width: 100px; margin: 5px;")
  
        newDiv.append(image)
      } else if (response.data[i].team.full_name === 'Washington Wizards') {
        var image = $("<img>").attr("src", "assets/images/washington-wizards.png");
  
        image.attr("style", "height: 75px; width: 100px; margin: 5px;")
  
        newDiv.append(image)
      } 

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
  $(".playerDetails").remove();
  $(".toggleName").remove();

  // Build the query URL for the ajax request to the  API
  buildQueryURL();

  // Empty the region associated with the input
  clear();

});




