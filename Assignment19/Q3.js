function findMatches(pattern, str) {
    let regex = new RegExp(pattern, 'g');
    return str.match(regex);
}

console.log(findMatches('\\d+', '123 abc 456 def')); // Matches any sequence of digits
console.log(findMatches('[a-z]+', '123 abc 456 def')); // Matches any sequence of lowercase letters
console.log(findMatches('[A-Z]+', 'Hello WORLD')); // Matches any sequence of uppercase letters
console.log(findMatches('\\w+', 'word1 word2_word3')); // Matches any sequence of alphanumeric characters and underscores
