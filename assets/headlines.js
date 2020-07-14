
// Added by Sheldon-Start *****

$(document).ready(function()
{
  // loadHeadlines();
});
  
function loadHeadlines()
{    
    // Empty the region associated with the 2 articles
    clear();   
    var queryURL = buildQueryURL();
  
    // Here is the AJAX request to the API 
    $.ajax(
    {
      url: queryURL,
      method: "GET"
    }).then(showArticles);
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
    
    // **** Create the elements and add classes ************
    var sectionEl = $("<section class='post' style='width: 25%'>"); // Create the section and add class
    var headerEl = $("<header class='post-header'>"); // Create the header and add class
    var h2El = $("<h3 class='post-title' style='color: #1f8dd6'>"); // Create the h2 and add class for headline
    var link = $("<a href='webUrl'>")
    h2El.append(link)
    var p1El = $("<p class='post-meta'>"); // Create the p and add class for byline (author name)
    var divEl = $("<div class='post-description'>"); // Create the div and add class for article details
    var p2El = $("<p>"); // Create the p and add class for publication date
    var p3El = $("<p>"); // Create the p and add class for lead paragraph
    
    $(".headline-section").append(sectionEl); // Add the new element to the DOM
    $(sectionEl).append(headerEl); // Add the new element to the DOM
    $(headerEl).append(h2El); // Add the new element to the DOM (headline)
    $(headerEl).append(p3El); // Add the new element to the DOM (lead para)

    $(sectionEl).append(divEl); // Add the new element to the DOM
    $(divEl).append(p1El); // Add the new element to the DOM (byline-author name)
    $(divEl).append(p2El); // Add the new element to the DOM (publication date)    

    // assigning all variables
    var headline = article.headline.main;
    var byline = article.byline.original;
    var webUrl= article.web_url;
    var leadPara = article.lead_paragraph;
    var pubDate = article.pub_date.substring(0, 10); // showing only date, not time

    // If the article has a headline, log and append 
    if (headline) 
    {
      h2El.text(headline);
    }

    // If the article has a byline (author name), log and append     
    if (byline) 
    {       
      p1El.text(byline);    
      divEl.append("<a href='" + webUrl + "'>" + "Read full article" + "</a>");     
    }

    // Log lead paragraph, and append, if exists    
    if (leadPara) 
    {       
      p3El.text(leadPara);
    }

    // Log published date, and append to document if exists    
    if (pubDate) 
    {
      p2El.text("Published on: "+pubDate); 
    }    
  }
}

// Function to clear the articles
function clear() 
{
  $("#headline-section").empty();
}
