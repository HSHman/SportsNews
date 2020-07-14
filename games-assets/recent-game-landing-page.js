//Retrieve Latest game (Provide on Landing Page)

$.ajax({
    url: 'https://www.balldontlie.io/api/v1/games/?seasons[]=2019-2020&per_page=100&team_ids[]=7',
    method: 'GET'
}).then(function(data) {

    var gameDateHP = document.querySelector('#game-dateHP');
    var homeTeamHP = document.querySelector('#home-teamHP');
    var awayTeamHP = document.querySelector('#away-teamHP');
    var homeTeamScoreHP = document.querySelector('#home-team-scoreHP');
    var awayTeamScoreHP = document.querySelector('#away-team-scoreHP');
        
    // gameDateHP.textContent = data.data[44].date;
    homeTeamHP.textContent = data.data[44].home_team.full_name;
    awayTeamHP.textContent = data.data[44].visitor_team.full_name;
    homeTeamScoreHP.textContent = data.data[44].home_team_score; 
    awayTeamScoreHP.textContent = data.data[44].visitor_team_score;
});