# Internal ISA SST Form Scripts - Data Archiving + Word Wrap

## Demo
![alt text](https://github.com/71xn/google-apps-script/blob/main/ISA/studentSupportTeam/demo.gif "Text 1")

## [Code](https://github.com/71xn/google-apps-script/blob/main/ISA/studentSupportTeam/script.gs)
```javascript
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

  var newSheetName = (new Date()).toLocaleDateString() + " - Archive"; 
  SpreadsheetApp.getActiveSpreadsheet().insertSheet(newSheetName); 
  var newSheet = SpreadsheetApp.getActive().getSheetByName(newSheetName); 

  var responsesRange = sheet.getDataRange(); 
  var responsesValues = responsesRange.getValues(); 

  var rows = responsesValues.length; 
  var cols = responsesValues[0].length; 

  var newSheetRange = newSheet.getRange(1, 1, rows, cols); 
  newSheetRange.setValues(responsesValues); 

  clearRange();
  newSheetRange.setWrap(true);
}

function wordWrap() {
  var sheet = SpreadsheetApp.getActive();
  var range = sheet.getDataRange();
  range.setWrap(true);
}
```