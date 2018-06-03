/*
 * Implement all your JavaScript in this file!
 * 
 *  * WORK TO DO:
 */

var theDebugArea = $('#output');
var theDisplay = $("input[name='display']");

var displayString = '';
var total = undefined;
var theOp = '';
var lastNumber;
var lastOp;
var ready = false;
var valSign = '+';

$('[id^=button]').click(function() {
  if (theOp == '=') { // if the last operation was = and now we're pressing a new number, 0 out the total
    total = undefined;
  }
  ready = true;
  displayString += this.value; 
  refreshDisplay(displayString);
});
 
$('#addButton').click(function() {
  calculateTotals(displayString,theOp);
  clearDisplayString();
  theOp = '+';
  ready = false;
});

$('#equalsButton').click(function() {
    if (!ready) {
      return;
    }
    if (theOp == '=') {
      calculateTotals(lastNumber,lastOp);
    } else {
      if (displayString != '') {
        lastNumber = displayString;
        lastOp = theOp;
        calculateTotals(displayString,theOp);
      } else {
          lastNumber = 0;
          lastOp = '+';
          calculateTotals(0,'+');
      }
      theOp = '='; 
  }
});

function calculateTotals(theValue,theOp) {
  if (total == undefined) {
    total = Number(theValue);
  } else {
      if (theOp == '+') {total += Number(theValue)};
      if (theOp == '-') {total -= Number(theValue)};
      if (theOp == '*') {total *= Number(theValue)};
      if (theOp == '/') {total /= Number(theValue)};

  };
  displayString = total;
  refreshDisplay(total);
  clearDisplayString();
};

$('#subtractButton').click(function() {
  calculateTotals(displayString,theOp);
  clearDisplayString()
  theOp = '-';
  ready = false;
});

$('#multiplyButton').click(function() {
  calculateTotals(displayString,theOp);
  clearDisplayString()
  theOp = '*';
  ready = false;
});

$('#divideButton').click(function() {
  calculateTotals(displayString,theOp);
  clearDisplayString()
  theOp = '/';
  ready = false;
});

$('#clearButton').click(function() {
  clearDisplayString();
  refreshDisplay('');
  total = undefined;
  theOp = '';
  ready = false;
});

function refreshDisplay(theValue) {
  theDisplay.val(theValue);
};

function clearDisplayString() {
  displayString = '';
};
