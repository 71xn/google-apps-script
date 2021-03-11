# Time Based Spreadsheet Clearing 

## Demo
![alt text](https://github.com/71xn/google-apps-script/blob/main/clearSpreadsheet/script-demo.gif "Text 1")

## Code
```javascript
function onOpen() {
    var ui = SpreadsheetApp.getUi();
    ui.createMenu('Clear Data')
        .addItem('Clear Data', 'clearRange')
        .addToUi();
  }
  
  function clearRange() {
    var sheetName = 'Sheet1'; // Replace with the actual name of the sheet
    var sheet = SpreadsheetApp.getActive().getSheetByName(sheetName);
    sheet.getRange('A2:Z1000').clearContent();}
```

## Trigger Setup
![alt text](https://github.com/71xn/google-apps-script/blob/main/clearSpreadsheet/trigger.png "Text 1")
