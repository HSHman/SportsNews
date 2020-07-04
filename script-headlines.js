
$(document).ready(function()
{
  // Change the ID to the team search Submit button.
  $("#run-search").on("click", function(event) 
  {
    //Prevents the page from reloading on submit.
    event.preventDefault();
  
    // Empty the region associated with the 2 articles
    clear();   
    var queryURL = buildQueryURL();
  
    // Here is the AJAX request to the API 
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(showArticles);
  });
});

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
  var numArticles = 2; // number of articles to display
   
  for (var i = 0; i < numArticles; i++) // Loop and build elements for the defined number of articles
  {    
    var article = NYTData.response.docs[i];  // Get article info one by one
    
    var $articleList = $("<ul>").addClass("list-group"); // Create the list group and add class
    
    $("#article-section").append($articleList); // Add the new element to the DOM

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
  $("#article-section").empty();
}

//  .on("click") function associated with the clear button
$("#clear-all").on("click", clear);
