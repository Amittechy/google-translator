var api = "AIzaSyC6OBaxECFDGHejevOtFC6RmUCrKFTYTXQ";
var googleTranslate = require('google-translate')(api);

var text = 'I am using google translator to convert this text to spanish'
console.log("English :>",text);
googleTranslate.translate(text, 'es', function(err, translation) {
  console.log("Spanish :>",translation.translatedText);
});								
