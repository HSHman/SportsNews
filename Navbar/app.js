
    
function buildQueryURL() {
        var player = $("#playerSearch").val().trim();
        var queryURL = "https://www.balldontlie.io/api/v1/players?search=" + player;

        // Creates AJAX call for the specific name
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          console.log(response)
          console.log(queryURL)
          
          for (var i = 0; i < response.data.length; i++) {

          console.log(response.data[i].first_name)
          console.log(response.data[i].last_name)
          console.log(response.data[i].position)
          console.log(response.data[i].team.full_name)
          console.log(response.data[i].height_feet + "'" + response.data[0].height_inches)
          console.log(response.data[i].weight_pounds)
          }


        }


    //       var $articleList = $("<ul>");
    //              $articleList.addClass("list-group");
              
    //         //  Add the newly created element to the DOM
    //    $("#article-section").append($articleList);

    
//     for (var i = 0; i < player; i++) {
        
        
    
//         // Create the  list group to contain the articles and add the article content for each
//         var $articleList = $("<ul>");
//         $articleList.addClass("list-group");
    
//         // Add the newly created element to the DOM
//         $("#article-section").append($articleList);
//     var firstName = response.data[""].first_name
//  var lastName = response.data[""].last_name
// console.log(firstName)
// console.log(lastName)


//         // If the article has a name, log and append to $articleList
//         var playerName = firstName + " " + lastName;
//         var $articleListItem = $("<li class='list-group-item articleHeadline'>");
    
//         if (playerName) {
//           console.log(playerName);
//           $articleListItem.append(
//             "<span class='label label-primary'>" +
//               articleCount +
//               "</span>" +
//               "<strong> " +
//               headline.main +
//               "</strong>"
//           );
//         }
//       }

//   })













  
    
//       // Loop through and build elements for the defined number of articles
//       for (var i = 0; i < re; i++) {
//         // Get specific article info for current index
//         var article = ballDontLieData.response.docs[i];
    
//         // Increase the articleCount (track article # - starting at 1)
//         var articleCount = i + 1;
    
//         // Create the  list group to contain the articles and add the article content for each
//         var $articleList = $("<ul>");
//         $articleList.addClass("list-group");
    
//         // Add the newly created element to the DOM
//         $("#article-section").append($articleList);
//     var firstName = response.data[article].first_name
//  var lastName = response.data[article].last_name
// console.log(firstName)
// console.log(lastName)


//         // If the article has a name, log and append to $articleList
//         var playerName = firstName + " " + lastName;
//         var $articleListItem = $("<li class='list-group-item articleHeadline'>");
    
//         if (playerName) {
//           console.log(playerName);
//           $articleListItem.append(
//             "<span class='label label-primary'>" +
//               articleCount +
//               "</span>" +
//               "<strong> " +
//               headline.main +
//               "</strong>"
//           );
//         }
//       }


// // })

    
        )}

//  function updatePage(response) {


//         // Loop through and build elements for the results
//       for (var i = 0; i < response; i++) {
       
//         // Increase the articleCount (track article # - starting at 1)
      
    
//         // Create the  list group to contain the articles and add the article content for each
//         // var $articleList = $("<ul>");
//         // $articleList.addClass("list-group");
    
//         // Add the newly created element to the DOM
// //         $("#article-section").append($articleList);
// //     var firstName = response.data[i].first_name
// //  var lastName = response.data[i].last_name

//  var a = $("<ul>");
//  a.attr("href", "#")
//  a.addClass("list-group PlayerName")
//  a.attr("data-number", [i])
//  a.text(response[i])
//  $("#article-section").append(a); 


//       }



//  }  

function clear() {
    $("#playerSearch").val("");
  }

$("#run-search").on("click", function(event) {

  event.preventDefault();

  // Build the query URL for the ajax request to the  API
  buildQueryURL();




  // Empty the region associated with the input
  clear();

  // return window.location.assign(href='playerSearch.html')
  




});




