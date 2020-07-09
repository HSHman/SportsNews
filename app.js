
// Added by Sheldon-Start *****

$(document).ready(function()
{
  loadHeadlines();
});
  
function loadHeadlines()
{
  // Change the ID to the team search Submit button.
  // $("#run-search").on("click", function(event) 
  // {
    //Prevents the page from reloading on submit.
    // event.preventDefault();
  
    // Empty the region associated with the 2 articles
    clear();   
    var queryURL = buildQueryURL();
  
    // Here is the AJAX request to the API 
    $.ajax(
    {
      url: queryURL,
      method: "GET"
    }).then(showArticles);
  // });
}


//build the query URL for NYT API 
function buildQueryURL() 
{  
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

    // Set the API key
  var queryParams = 
  { 
    "api-key": "R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M"       
  };
  
  // Set the search text
  queryParams.q = "NBA";  
  
  // Set the search start from date
  var startYear = moment().year()+ "0101";  
  queryParams.begin_date = startYear;
  return queryURL + $.param(queryParams);
}

// Function shows API query data on the webpage
function showArticles(NYTData) 
{    
  var numArticles = 4; // number of articles to display
   
  for (var i = 0; i < numArticles; i++) // Loop and build elements for the defined number of articles
  {        
    var article = NYTData.response.docs[i];  // Get article info one by one
    
    var $articleList = $("<ul>").addClass("list-group"); // Create the list group and add class
    
    $("#headline-section").append($articleList); // Add the new element to the DOM

    // If the article has a headline, log and append to $articleList
    var headline = article.headline;
    var $articleListItem = $("<li class='list-group-item articleHeadline'>");
    if (headline && headline.main) 
    {
      $articleListItem.append(
        "<span class='label label-primary'>"+"</span>"+"<strong>" + headline.main +"</strong>");
    }

    // If the article has a byline, log and append to $articleList
    var byline = article.byline;
    if (byline && byline.original) 
    {
      $articleListItem.append("<h5>" + byline.original + "</h5>");
    }

    // Log lead paragraph, and append to document if exists
    var leadPara = article.lead_paragraph;

    if (leadPara) 
    {
      $articleListItem.append("<h5>" + leadPara + "</h5>");
    }

    // Log published date, and append to document if exists
    var pubDate = article.pub_date.substring(0, 10); // showing only date, not time
    if (pubDate) 
    {
      $articleListItem.append("<h5>" + "Published on: "+pubDate + "</h5>");
    }

    // Append and log url
    $articleListItem.append("<a href='" + article.web_url + "'>" + article.web_url + "</a>");

    // Append the article
    $articleList.append($articleListItem);
  }
}

// Function to clear the articles
function clear() {
  $("#headline-section").empty();
}

//  .on("click") function associated with the clear button
$("#clear-all").on("click", clear);

// Added by Sheldon-End *****

//----Commented by Sheldon--------------------------Start    
// function buildQueryURL() {
//         var player = $("#playerSearch").val().trim();
//         var queryURL = "https://www.balldontlie.io/api/v1/players?search=" + player;

//         // Creates AJAX call for the specific name
//         $.ajax({
//           url: queryURL,
//           method: "GET"
//         }).then(function(response) {
//           console.log(response)
//           console.log(queryURL)
          
//           for (var i = 0; i < response.data.length; i++) {

//           console.log(response.data[i].first_name)
//           console.log(response.data[i].last_name)
//           console.log(response.data[i].position)
//           console.log(response.data[i].team.full_name)
//           console.log(response.data[i].height_feet + "'" + response.data[0].height_inches)
//           console.log(response.data[i].weight_pounds)
//           }


//         }
//----Commented by Sheldon--------------------------End   

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

    //----Commented by Sheldon--------------------------Start   
        // )}
//----Commented by Sheldon--------------------------End   

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
//----Commented by Sheldon--------------------------Start   
// function clear() {
//     $("#playerSearch").val("");
//   }

// $("#run-search").on("click", function(event) {

//   event.preventDefault();

//   // Build the query URL for the ajax request to the  API
//   buildQueryURL();




//   // Empty the region associated with the input
//   clear();

//   // return window.location.assign(href='playerSearch.html')
  




// });
//----Commented by Sheldon--------------------------End   



