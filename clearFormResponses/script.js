// Time Based Form Responses Spreadsheet Clearing 
// Finn Lestrange - 5/03/21

function onOpen() {
  // Menu override incase the data is not cleared properly
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Clear Data')
      .addItem('Clear Data', 'clearRange')
      .addToUi();
}


function clearRange() {
  var sheetName = 'Form responses 1'; // Replace with the actual name of the sheet
  var sheet = SpreadsheetApp.getActive().getSheetByName(sheetName);
  var firstRowToDelete = 2;
  var numberToDelete = sheet.getMaxRows() - (firstRowToDelete + 1);
  if (numberToDelete == 0) {
    return null;
  } else {
    sheet.deleteRows(firstRowToDelete, numberToDelete);
  }
}