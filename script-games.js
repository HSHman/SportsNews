$(document).ready(function() {
    
});

//Team Information (Raptors)
$.ajax({
    url: 'https://www.balldontlie.io/api/v1/teams/28',
    method: 'GET'
}).then(function(data) {
    
    var teamInfo = document.querySelector('#team-info');
    
    console.log(data)
    console.log(data.city)
    console.log(data.conference)
    console.log(data.division)
    
    teamInfo.textContent = data.city + ' - ' + data.conference + ' - ' + data.division;
});



//Retrieve Latest game (Provided on Landing Page)

/*$.ajax({
    url: 'https://www.balldontlie.io/api/v1/games/?seasons[]=2019-2020&per_page=100&team_ids[]=7',
    method: 'GET'
}).then(function(data) {

    var gameDateHP = document.querySelector('#game-dateHP');
    var homeTeamHP = document.querySelector('#home-teamHP');
    var awayTeamHP = document.querySelector('#away-teamHP');
    var homeTeamScoreHP = document.querySelector('#home-team-scoreHP');
    var awayTeamScoreHP = document.querySelector('#away-team-scoreHP');
        
    gameDateHP.textContent = data.data[44].date;
    homeTeamHP.textContent = data.data[44].home_team.full_name;
    awayTeamHP.textContent = data.data[44].visitor_team.full_name;
    homeTeamScoreHP.textContent = data.data[44].home_team_score; 
    awayTeamScoreHP.textContent = data.data[44].visitor_team_score;
});*/

//Retrieve Latest Game (Team Raptors)

$.ajax({
    url: 'https://www.balldontlie.io/api/v1/games/?seasons[]=2019-2020&per_page=100&team_ids[]=28',
    method: 'GET'
}).then(function(data) {
    
    var gameDate = document.querySelector('#game-date');
    var homeTeam = document.querySelector('#home-team');
    var awayTeam = document.querySelector('#away-team');
    var homeTeamScore = document.querySelector('#home-team-score');
    var awayTeamScore = document.querySelector('#away-team-score');
    
    console.log(data)
    
    gameDate.textContent = data.data[21].date;
    homeTeam.textContent = data.data[21].home_team.full_name;
    awayTeam.textContent = data.data[21].visitor_team.full_name;
    homeTeamScore.textContent = data.data[21].home_team_score; 
    awayTeamScore.textContent = data.data[21].visitor_team_score;
    
    // X6 Previous Games (Date,Teams,Score)
    //Game 1
    var previousGameOneDate = document.querySelector('#previous-game1-date');
    var previousGameOneAwayTeam = document.querySelector('#previous-game1-away-team');
    var previousGameOneHomeTeam = document.querySelector('#previous-game1-home-team');
    var previousGameOneAwayScore = document.querySelector('#previous-game1-away-score');
    var previousGameOneHomeScore = document.querySelector('#previous-game1-home-score');

    previousGameOneDate.textContent = data.data[12].date;
    previousGameOneAwayTeam.textContent = data.data[12].visitor_team.abbreviation;
    previousGameOneHomeTeam.textContent = data.data[12].home_team.abbreviation;
    previousGameOneAwayScore.textContent = data.data[12].visitor_team_score;
    previousGameOneHomeScore.textContent = data.data[12].home_team_score;

    //Game 2
    var previousGameTwoDate = document.querySelector('#previous-game2-date');
    var previousGameTwoAwayTeam = document.querySelector('#previous-game2-away-team');
    var previousGameTwoHomeTeam = document.querySelector('#previous-game2-home-team');
    var previousGameTwoAwayScore = document.querySelector('#previous-game2-away-score');
    var previousGameTwoHomeScore = document.querySelector('#previous-game2-home-score');

    previousGameTwoDate.textContent = data.data[70].date;
    previousGameTwoAwayTeam.textContent = data.data[70].visitor_team.abbreviation;
    previousGameTwoHomeTeam.textContent = data.data[70].home_team.abbreviation;
    previousGameTwoAwayScore.textContent = data.data[70].visitor_team_score;
    previousGameTwoHomeScore.textContent = data.data[70].home_team_score;

    //Game 3
    var previousGameThreeDate = document.querySelector('#previous-game3-date');
    var previousGameThreeAwayTeam = document.querySelector('#previous-game3-away-team');
    var previousGameThreeHomeTeam = document.querySelector('#previous-game3-home-team');
    var previousGameThreeAwayScore = document.querySelector('#previous-game3-away-score');
    var previousGameThreeHomeScore = document.querySelector('#previous-game3-home-score');

    previousGameThreeDate.textContent = data.data[11].date;
    previousGameThreeAwayTeam.textContent = data.data[11].visitor_team.abbreviation;
    previousGameThreeHomeTeam.textContent = data.data[11].home_team.abbreviation;
    previousGameThreeAwayScore.textContent = data.data[11].visitor_team_score;
    previousGameThreeHomeScore.textContent = data.data[11].home_team_score;

    //Game 4
    var previousGameFourDate = document.querySelector('#previous-game4-date');
    var previousGameFourAwayTeam = document.querySelector('#previous-game4-away-team');
    var previousGameFourHomeTeam = document.querySelector('#previous-game4-home-team');
    var previousGameFourAwayScore = document.querySelector('#previous-game4-away-score');
    var previousGameFourHomeScore = document.querySelector('#previous-game4-home-score');

    previousGameFourDate.textContent = data.data[10].date;
    previousGameFourAwayTeam.textContent = data.data[10].visitor_team.abbreviation;
    previousGameFourHomeTeam.textContent = data.data[10].home_team.abbreviation;
    previousGameFourAwayScore.textContent = data.data[10].visitor_team_score;
    previousGameFourHomeScore.textContent = data.data[10].home_team_score;

    //Game 5
    var previousGameFiveDate = document.querySelector('#previous-game5-date');
    var previousGameFiveAwayTeam = document.querySelector('#previous-game5-away-team');
    var previousGameFiveHomeTeam = document.querySelector('#previous-game5-home-team');
    var previousGameFiveAwayScore = document.querySelector('#previous-game5-away-score');
    var previousGameFiveHomeScore = document.querySelector('#previous-game5-home-score');

    previousGameFiveDate.textContent = data.data[26].date;
    previousGameFiveAwayTeam.textContent = data.data[26].visitor_team.abbreviation;
    previousGameFiveHomeTeam.textContent = data.data[26].home_team.abbreviation;
    previousGameFiveAwayScore.textContent = data.data[26].visitor_team_score;
    previousGameFiveHomeScore.textContent = data.data[26].home_team_score;

    //Game 6
    var previousGameSixDate = document.querySelector('#previous-game6-date');
    var previousGameSixAwayTeam = document.querySelector('#previous-game6-away-team');
    var previousGameSixHomeTeam = document.querySelector('#previous-game6-home-team');
    var previousGameSixAwayScore = document.querySelector('#previous-game6-away-score');
    var previousGameSixHomeScore = document.querySelector('#previous-game6-home-score');

    previousGameSixDate.textContent = data.data[19].date;
    previousGameSixAwayTeam.textContent = data.data[19].visitor_team.abbreviation;
    previousGameSixHomeTeam.textContent = data.data[19].home_team.abbreviation;
    previousGameSixAwayScore.textContent = data.data[19].visitor_team_score;
    previousGameSixHomeScore.textContent = data.data[19].home_team_score;

});
