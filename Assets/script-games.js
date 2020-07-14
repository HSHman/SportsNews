$(document).ready(function () {

    $("button").on("click", function() {
        
        var teamId = $("td button").index(this) + 1;
        var queryURLteam = "https://www.balldontlie.io/api/v1/teams/" + teamId;
        var queryURLgames = "https://www.balldontlie.io/api/v1/games/?seasons[]=2019-2020&per_page=100&team_ids[]=" + teamId;
        
        
        
        document.getElementById("theResults").style.display = "block";
        
        $.ajax({
            url: queryURLteam,
            method: "GET"
            
        }).then(function(response) {
            
            var teamInfo = document.querySelector('#team-info');
            var teamName = document.getElementById('team-name')
            
            console.log(response);
            console.log(response.city);
            console.log(response.conference);
            console.log(response.division);
            
            teamName.textContent = response.name;
            teamInfo.textContent = response.city + ' - ' + response.conference + ' - ' + response.division;
        });    
            
        $.ajax({
            url: queryURLgames,
            method: "GET"
        }).then(function(response) {
            
            console.log(response);

            //Loop and Display Game when clicked
            
            for (var i = 0; i < response.data.length; i++) {
                
                
                var gameDate = document.querySelector('#game-date');
                var homeTeam = document.querySelector('#home-team');
                var awayTeam = document.querySelector('#away-team');
                var homeTeamScore = document.querySelector('#home-team-score');
                var awayTeamScore = document.querySelector('#away-team-score');
                
                //Display Team Logo

                /*var homeAbbreviation = response.home_team.abbreviation;
                var homeLogo = "assets/Team_Icons/" + homeAbbreviation + "_logo.svg";
                document.getElementById("homeTeam-image").src = homeLogo;
                
                console.log(homeAbbreviation)
                
                var awayAbbreviation = response.visitor_team.abbreviation;
                var awayLogo = "assets/Team_Icons/" + awayAbbreviation + "_logo.svg";
                document.getElementById("awayTeam-image").src = awayLogo;*/
                
                if (response.data[i].date > "2020-03-05T00:00:000Z" && response.data[i].date < "2020-03-12T00:00:000Z" ) {
                    
                    gameDate.textContent = response.data[i].date
                    homeTeam.textContent = response.data[i].home_team.full_name;
                    awayTeam.textContent = response.data[i].visitor_team.full_name;
                    homeTeamScore.textContent = response.data[i].home_team_score; 
                    awayTeamScore.textContent = response.data[i].visitor_team_score;
                    
                    //Trimming the date
                    
                    var dateString = response.data[i].date
    
                    var fixedDate = dateString.slice(0,10)
                    gameDate.textContent = fixedDate;

                } else if (response.data[i].home_team_score === '0' && response.data[i].visitor_team_score === "0") {
                    
                    gamedate.textContent = "These games have been postponed till further notice";

                }
            }
        })
    });
});