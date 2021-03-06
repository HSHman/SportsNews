$("button").on("click", function() {
    var teamId = $("td button").index(this) + 1;
    var queryURLteam = "https://www.balldontlie.io/api/v1/teams/" + teamId;
    var queryURLgames = "https://www.balldontlie.io/api/v1/games/?seasons[]=2019-2020&per_page=100&team_ids[]=" + teamId;
    
    // ANCHOR 
    $(function() {
        $(document).scrollTop( $(".team-results").offset().top );  
    });
    // ANCHOR 
    
    
    document.querySelector(".team-results").style.display = "block";



    $.ajax({
    url: queryURLteam,
    method: 'GET'
}).then(function(data) {
    
    var teamInfo = document.querySelector('#team-info');
    var teamName = document.getElementById('team-name')
    
   
    
    teamName.textContent = data.name;
    teamInfo.textContent = data.city + ' - ' + data.conference + ' - ' + data.division;


   



});

    


$.ajax({
    url: queryURLgames,
    method: 'GET'
}).then(function(data) {
    
    
    var homeAbbreviation = data.data[21].home_team.abbreviation;
    var homeLogo = "Assets/Team_Icons/" + homeAbbreviation + "_logo.svg";
    document.getElementById("homeTeam-image").src = homeLogo;
    
    
    var awayAbbreviation = data.data[21].visitor_team.abbreviation;
    var awayLogo = "Assets/Team_Icons/" + awayAbbreviation + "_logo.svg";
    document.getElementById("awayTeam-image").src = awayLogo;
   
   

   
   
    // var gameDate = document.querySelector('#game-date');
    var homeTeam = document.querySelector('#home-team');
    var awayTeam = document.querySelector('#away-team');
    var homeTeamScore = document.querySelector('#home-team-score');
    var awayTeamScore = document.querySelector('#away-team-score');
    
    homeTeam.textContent = data.data[21].home_team.full_name;
    awayTeam.textContent = data.data[21].visitor_team.full_name;
    homeTeamScore.textContent = data.data[21].home_team_score; 
    awayTeamScore.textContent = data.data[21].visitor_team_score;
    
    console.log(data);
    var rawDate = data.data[21].date;
    var year = rawDate.substring(0, 4);
    var month = rawDate.substring(5, 7);
    var day = rawDate.substring(8, 10);
    

    trimDate = month + " "+ day + " " + year;
    console.log(trimDate);
    
    
    
   

    var haLower = homeAbbreviation.toLowerCase();
    var queryURLstats = "https://nba-players.herokuapp.com/players-stats-teams/" + haLower;

    
$.ajax({
    url: queryURLstats,
    method: 'GET'
}).then(function(response) {
    




    
    console.log(response)
    for (var i = 0; i < response.length; i++) {
       

        var playerStats = {playerName : response[i].name,
            gamesPlayed : response[i].games_played,
          PPgame : response[i].points_per_game,
        assistsPG : response[i].assists_per_game,
        reboundPG : response[i].rebounds_per_game,
         threePP : response[i].three_point_percentage,
         blocksPgame : response[i].blocks_per_game,};
    


        var playerContainer = $("player-container").append("<div></div").addClass( "grid-row player");
       playerContainer;
      


    
    
    }


  



});









    });









    })