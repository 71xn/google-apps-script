// Time Based Spreadsheet Clearing 
// Finn Lestrange - 11/03/21

function onOpen() {
    // Menu override incase the data is not cleared properly
    var ui = SpreadsheetApp.getUi();
    ui.createMenu('Clear Data')
        .addItem('Clear Data', 'clearRange')
        .addToUi();
  }
  
  function clearRange() {
    var sheetName = 'Sheet1'; // Replace with the actual name of the sheet
    var sheet = SpreadsheetApp.getActive().getSheetByName(sheetName);
    sheet.getRange('A2:Z1000').clearContent();}