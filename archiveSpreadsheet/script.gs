// Board Archive Script
// Finn Lestrange - 21/03/21

function onOpen() {
    var ui = SpreadsheetApp.getUi();
    ui.createMenu('Board')
        .addItem('Archive', 'archive')
        .addToUi();
  }
  
  function archive() {
    
    var sheet = SpreadsheetApp.getActive();
  
    var sourceRange = sheet.getDataRange(); 
    var sourceValues = sourceRange.getValues(); 
  
    var rows = sourceValues.length; 
    var cols = sourceValues[0].length; 
  
    var newSheetName = Browser.inputBox('Please enter the name of the new sheet:', Browser.Buttons.OK_CANCEL);
    SpreadsheetApp.getActiveSpreadsheet().insertSheet(newSheetName, 99); 
    var newSheet = SpreadsheetApp.getActive().getSheetByName(newSheetName); 
  
    var newSheetRange = newSheet.getRange(1, 1, rows, cols); 
    newSheetRange.setValues(sourceValues); 
  
    newSheetRange.setWrap(true);
  }