function Players(){
    /**
     * Script to import Sleeper's Player Database
     * Sleeper API supporting documentation found at https://docs.sleeper.app/
     * Run Script sparingly as it is a larger file size and data does not change often!! 
     **/
     
     // call to sleeper's Players API -  
     
       var PDB = UrlFetchApp.fetch("https://api.sleeper.app/v1/players/nfl");
       var json = JSON.parse(PDB);
       Logger.log(json[0])  
    // API returns a nested json w/ each player id as key
    // loop through each player to create multi-array
    
    // create empty array
       var keys = []
    // loop using player ID for each array
       for(var key in json){ 
       var arr = [key , json[key]["weight"],json[key]["status"],json[key]["sport"],json[key]["fantasy_positions"],json[key]["college"],json[key]["player_id"],json[key]["practice_description"],json[key]["rotowire_id"],json[key]["active"],json[key]["position"],json[key]["number"],json[key]["last_name"],json[key]["height"],json[key]["injury_status"],json[key]["injury_body_part"],json[key]["injury_notes"],json[key]["practice_participation"],json[key]["high_school"],json[key]["team"],json[key]["sportradar_id"],json[key]["yahoo_id"],json[key]["years_exp"],json[key]["fantasy_data_id"],json[key]["hashtag"],json[key]["search_last_name"],json[key]["first_name"],json[key]["birth_city"],json[key]["espn_id"],json[key]["birth_date"],json[key]["search_first_name"],json[key]["news_updated"],json[key]["gsis_id"],json[key]["birth_country"],json[key]["birth_state"],json[key]["search_full_name"],json[key]["depth_chart_position"],json[key]["rotoworld_id"],json[key]["depth_chart_order"],json[key]["injury_start_date"],json[key]["stats_id"]]   
    // push results from loop into empty array
       keys.push(arr); 
                            }
     
    /* Set Script to retrieve "Players" Sheet. 
     * Clear "Players" sheet
     * retreive range (3rd row, 2nd column, # of keys (player ids), 41 (# of columns of data in our array)
     * set values from array to retreived range
     */
     
      var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Players");
      var headers =ss.getRange('1:2').getValues();
      ss.clear();
      ss.getRange('1:2').setValues(headers);
      ss.getRange(3,2,keys.length,41).setValues(keys);
    ss.getRange('A3:A').setNumberFormat(0);
  }