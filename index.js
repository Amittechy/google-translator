var api = "AIzaSyC6OBaxECFDGHejevOtFC6RmUCrKFTYTXQ";
var googleTranslate = require('google-translate')(api);

var text = 'I am using google translator to convert this text to swedish'
console.log("English :>",text);
googleTranslate.translate(text, 'sv', function(err, translation) {
  console.log("Spanish :>",translation.translatedText);
});								
