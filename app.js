const config = {
    numberOfTeamsInNhl: 31,
    baseApi: 'https://statsapi.web.nhl.com//api/v1',
    teamsApi: '/teams',
    endPoints: {
        rosterApi: '/?expand=team.roster',
    }
}

let getTeamRoster = {
    path: `${config.baseApi}${config.teamsApi}${config.endPoints.rosterApi}`
    ,
    params: {
        rosterApi: config.endPoints.rosterApi
    }
};

function consoleLog(callback) {
    console.log(callback);
}

fetchJSON(getTeamRoster, consoleLog)
    // .then(function (response) {
    //     debugger;
    //     return response.json();
    // })
    // .then(function (myJson) {
    //     console.log(JSON.stringify(myJson));
    // });

