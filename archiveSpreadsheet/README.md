# Google Sheets Archival Script

## Demo
![alt text](https://github.com/71xn/google-apps-script/blob/main/archiveSpreadsheet/demo.gif "Text 1")

## [Code](https://github.com/71xn/google-apps-script/blob/main/archiveSpreadsheet/script.gs)
```javascript
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
```