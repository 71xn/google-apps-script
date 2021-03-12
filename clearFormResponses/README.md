# Time Based Form Responses Spreadsheet Clearing 

## Demo
![alt text](https://github.com/71xn/google-apps-script/blob/main/clearFormResponses/demo.gif "Text 1")

## [Code](https://github.com/71xn/google-apps-script/blob/main/clearFormResponses/script.gs)
```javascript
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Clear Data')
      .addItem('Clear Data', 'clearRange')
      .addToUi();
}

function clearRange() {
  var sheetName = 'Form responses 1'; 
  var sheet = SpreadsheetApp.getActive().getSheetByName(sheetName);
  var firstRowToDelete = 2;
  var numberToDelete = sheet.getLastRow() - firstRowToDelete + 1;
  sheet.deleteRows(firstRowToDelete, numberToDelete);
}
```

## Trigger Setup
![alt text](https://github.com/71xn/google-apps-script/blob/main/clearFormResponses/trigger.png "Text 1")
