// Student Support Team Spreadsheet Scripts
// Finn Lestrange - 12/03/2021

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('SST')
      .addItem('Archive', 'archive')
      .addSeparator()
      .addItem("Word Wrap", 'wordWrap')
      .addToUi();
}

function clearRange() {
  var sheetName = 'Form responses 1'; 
  var sheet = SpreadsheetApp.getActive().getSheetByName(sheetName);
  var firstRowToDelete = 2;
  var numberToDelete = sheet.getLastRow() - firstRowToDelete + 1;
  sheet.deleteRows(firstRowToDelete, numberToDelete);
}

function archive() {
  var sheetName = 'Form responses 1'; 
  var sheet = SpreadsheetApp.getActive().getSheetByName(sheetName); 

  var newSheetName = (new Date()).toLocaleDateString() + " - Archive"; // Gets current date and appends archive to the end for the name of the new sheet
  SpreadsheetApp.getActiveSpreadsheet().insertSheet(newSheetName); // Inserts the new sheet 
  var newSheet = SpreadsheetApp.getActive().getSheetByName(newSheetName); // Stores the new sheet for the data to be copied to to the newSheet var

  var responsesRange = sheet.getDataRange(); // Gets the range of the form responses data to be copied
  var responsesValues = responsesRange.getValues(); // Gets the values to be copied from the range of the form responses data

  var rows = responsesValues.length; // Gets # of rows of the form responses sheet
  var cols = responsesValues[0].length; // Gets cols from the length of the first index in the values array 2D array [rows][cols]

  var newSheetRange = newSheet.getRange(1, 1, rows, cols); // Sets the range for the new sheet to the same range as the old sheet
  newSheetRange.setValues(responsesValues); // Copies over the form responses data to the new sheet

  clearRange(); // Clears the form responses sheet - https://github.com/71xn/google-apps-script/tree/main/clearFormResponses
  newSheetRange.setWrap(true);
}

function wordWrap() {
  var sheet = SpreadsheetApp.getActive();
  var range = sheet.getDataRange();
  range.setWrap(true);
}