function resetTradeFinder() {
    SpreadsheetApp.getActive().getSheetByName('Trade Finder').getRange('V25:V77').setValue('FALSE');
    SpreadsheetApp.getActive().getSheetByName('Trade Finder').getRange('AH25:AH77').setValue('FALSE');
    SpreadsheetApp.getActive().getSheetByName('Trade Finder').getRange('V81:V103').setValue('FALSE');
    SpreadsheetApp.getActive().getSheetByName('Trade Finder').getRange('AH81:AH103').setValue('FALSE');
  }