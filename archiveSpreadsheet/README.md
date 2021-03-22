# Google Sheets Archival Script with Format, Row and Column Copying

## Demo
![alt text](https://github.com/71xn/google-apps-script/blob/main/archiveSpreadsheetFormatting/demo.gif "Text 1")

## [Code](https://github.com/71xn/google-apps-script/blob/main/archiveSpreadsheetFormatting/script.gs)
```javascript
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Board')
      .addItem('Archive', 'archive')
      .addToUi();
}

function archive() {
  
  var source = SpreadsheetApp.getActiveSpreadsheet();
  var sourceSheet = source.getActiveSheet();
  
  var sCols = sourceSheet.getMaxColumns();
  var sRows = sourceSheet.getMaxRows();

  var sourceRange = sourceSheet.getRange(1, 1, sRows, sCols);
  var sourceValues = sourceRange.getValues();

  var newSheetName = Browser.inputBox('Enter the name of the new sheet:', Browser.Buttons.OK_CANCEL);
  if (newSheetName == "cancel") {
    return null;
  }

  SpreadsheetApp.getActiveSpreadsheet().insertSheet(newSheetName, 99); // Index set to 99 so new archive sheet becomes last one
  var newSheet = SpreadsheetApp.getActive().getSheetByName(newSheetName);
  setDimensions(newSheetName, sRows, sCols);

  var newRange = newSheet.getRange(1, 1, sourceValues.length, sourceValues[0].length);

  sourceRange.copyTo(newRange);
  sourceRange.copyTo(newRange, SpreadsheetApp.CopyPasteType.PASTE_COLUMN_WIDTHS, false); //https://developers.google.com/apps-script/reference/spreadsheet/copy-paste-type
  newRange.offset(0, 0, sourceValues.length, sourceValues[0].length)
  .setValues(sourceValues);

  // Takes far too long to complete, only if necessary
  //setRowHeight(sourceSheet.getName(), newSheetName); 
}

function setRowHeight(sourceSheetName, targetSheetName) {
  let sourceSheet = SpreadsheetApp.getActive().getSheetByName(sourceSheetName);
  let targetSheet = SpreadsheetApp.getActive().getSheetByName(targetSheetName);

  let sRows = sourceSheet.getMaxRows();
  
  for (let i = 1; i < sRows; i++) {
    targetSheet.setRowHeight(i, sourceSheet.getRowHeight(i));
  }
}

function setDimensions(sheetName, copyRows, copyCols) {

  let sheet = SpreadsheetApp.getActive().getSheetByName(sheetName);

  let sheetRows = sheet.getMaxRows();
  let sheetCols = sheet.getMaxColumns();

  // Cols
  if (sheetCols < copyCols) {
    sheet.insertColumnsAfter(sheetCols, copyCols-sheetCols);
  } else if (sheetCols > copyCols) {
    sheet.deleteColumns(sheetCols, sheetCols - copyCols);
  }

  // Rows
  if (sheetRows < copyRows) {
    sheet.insertRowsAfter(sheetRows, copyRows-sheetRows);
    
  } else if (sheetRows > copyRows) {
    sheet.deleteRows(sheetRows, sheetRows - copyRows);
  }
} 
```

