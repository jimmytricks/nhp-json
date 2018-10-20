const config = {
    numberOfTeamsInNhl: 31,
    baseApi: 'https://statsapi.web.nhl.com//api/v1',
    teamsApi: '/teams/',
    endPoints: {
        rosterApi: '/?expand=team.roster',
    }
}

let databasePlayerArray = [];
let currentNumber = 1;

let getTeamRoster = {
    path: `${config.baseApi}${config.teamsApi}${currentNumber}${config.endPoints.rosterApi}`
    ,
    params: {
        // rosterApi: config.endPoints.rosterApi
    }
};

function consoleLog(callback) {
    console.log(callback);
}

for (i = 0; i < config.numberOfTeamsInNhl; i++) {
    console.log(currentNumber);
    currentNumber++;
    console.log(getTeamRoster);
    fetchJSON(getTeamRoster, consoleLog)
}
