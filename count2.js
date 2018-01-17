function aaa(word) {
  word = word.toLowerCase();
  var dictionary = {};
  for (var i = 0; i < word.length; i++) {
    var c = word.charAt(i);
    if (c == " ") {
      continue;
    }
    if (c in dictionary) {
      dictionary[c].push(i);
    } else {
      dictionary[c] = [i];
    }

  }
  return dictionary;
}
console.log(aaa("lighthouse"));
