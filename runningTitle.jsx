var currentDoc = app.activeDocument;
var pages = currentDoc.pages;
var filePath = currentDoc.filePath.fsName;
var titleText = prompt('Type your title without spaces and punctuation:', '', 'Type your title without spaces and punctuation:').toLowerCase().split('');

function isEven(n) {
  return n % 2 === 0;
}

var through = 0;
var j = 0;

for (var i = 0; i < pages.length; i++) {
  var letter = pages[i].place(new File(filePath + '/letters/letter-' + titleText[j] + '.ai'));
  if (isEven(i) && i !== 0) {
    letter.geometricBounds = [0, 8.5 + ' in', 11 + ' in', 17 + ' in'];
  } else {
    letter.geometricBounds = [0, 0, 11 + ' in', 8.5 + ' in'];
  }

  if (i == (pages.length - 1)) {
    for (j; j < titleText.length; j++) {
      var letter = pages[i].place(new File(filePath + '/letters/letter-' + titleText[j] + '.ai'));
      if (isEven(i) && i !== 0) {
        letter.geometricBounds = [0, 8.5 + ' in', 11 + ' in', 17 + ' in'];
      } else {
        letter.geometricBounds = [0, 0, 11 + ' in', 8.5 + ' in'];
      }
    }
  }

  if (j == (titleText.length - 1)) {
    j = 0;
  } else {
    j++;
  }
}
