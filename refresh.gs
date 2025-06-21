function refresh() {
    //Define variables
    var sn = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Home");
    var username = sn.getRange('B2').getValue();
    var year = sn.getRange('B3').getValue();
    var userId = sn.getRange('B4').getValue();
    var random = sn.getRange('B9').getValue();
    
    //Re-Randomize
    sn.getRange('B9').setValue('=RAND()');
    
    //Refresh Matchups
    //var cellFunction = '=IMPORTJSON("https://api.sleeper.app/v1/league/' + leagueId + '/matchups/' + week + '","")';
    //var sn = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Master");
    //sn.getRange('A1').setValue(cellFunction);
    
    //Refresh Rosters
    //var cellFunction = '=IMPORTJSON("https://api.sleeper.app/v1/league/' + leagueId + '/rosters' + '","")';
    //var sn = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Name/Owner ID");
    //sn.getRange('A1').setValue(cellFunction);
    
    //Refresh Team Names
    //var cellFunction = '=IMPORTJSON("https://api.sleeper.app/v1/league/' + leagueId + '/users' + '","")';
    //var sn = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Team Names");
    //sn.getRange('A1').setValue(cellFunction);
  }