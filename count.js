function wordcount(word) {
  word = word.toLowerCase();
  var dictionary = {};
  for (var i = 0; i < word.length; i++) {
    var c = word.charAt(i);
    if (c == " ") {
      continue;
    }
    if (c in dictionary) {
      
      dictionary[c] = dictionary[c] + 1;
    } else {
      
      dictionary[c] = 1;
    }
  }
  return dictionary;
}
console.log(wordcount("lighthouse dasdsa"));
