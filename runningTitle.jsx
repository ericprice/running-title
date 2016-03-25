var doc = app.activeDocument,
    pages = doc.pages,
    promptText = 'Type your title without spaces and punctuation:',
    titleText = prompt(promptText, '', promptText).toLowerCase().split(''),
    programName = 'curatorialstudies',
    letterDirPrefix = 'letters',
    letterFileFormat = 'ai';

function isEven(n) {
  return n % 2 === 0;
}

function main(color) {
  var letters = doc.layers.add({name: 'letters-' + color}).move(LocationOptions.AT_END),
      j = 0;

  // Gray text, in this case, is used for the program name
  if (color === 'gray') {
    titleText = programName.split('');
  }

  function addLetters(i, j) {
    var letter = pages[i].place(new File(doc.filePath.fsName + '/' + letterDirPrefix + '-' + color + '/' + titleText[j] + '.' + letterFileFormat));
    if (isEven(i) && i !== 0) {
      letter.geometricBounds = [0, '50%', '100%', '100%'];
    } else {
      letter.geometricBounds = [0, 0, '100%', '50%'];
    }
  }

  for (var i = 0; i < pages.length; i++) {
    addLetters(i, j);

    // Car crash on last page
    if (i == (pages.length - 1)) {
      addLetters(i, j);
    }

    // Loop through the text multiple times, if necessary, to fill all pages
    if (j == (titleText.length - 1)) {
      j = 0;
    } else {
      j++;
    }
  }

  letters.locked = true;
}

main('yellow');
main('gray');
