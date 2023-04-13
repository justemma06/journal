// this is a constructor for the journal
export default function Journal(title, body) {
    this.title = title;
    this.body = body;
}

// a prototype to count the words in the passage or input. 
Journal.prototype.wordCounter = function () {
    if (this.body.trim().length === 0) {
      return 0;
    }
    let totalWords = 0;
    let wordArray = this.body.split(" ");
    totalWords = wordArray.length;
    return totalWords;
};

// this a prototype to count the vowels and consonant words in the given words
Journal.prototype.charCounter = function () {
    let vowelArr = ["a", "i", "o", "e", "u"]; 
    // list all the vowels in a array to make it easier...
    let totalVowels = 0;
    let totalConsonants = 0;
    // looped through saying if in the given words vowelarr(vowels)listed includes in the passage the loop show count....and if the vowels listed does not include it show count it as a consonant word.
    for (let i = 0; i < this.body.length; i++) {
      if (vowelArr.includes(this.body[i])) {
        totalVowels++;
      } else if (this.body[i] != " ") {
        totalConsonants++;
      }
    }
    return [totalVowels, totalConsonants];
};

//  getTeaser gets the first and the 8th words in the passage....
Journal.prototype.getTeaser = function () {
    const wordsplit = this.body.split(" ");
    const teaserWord = [];
    for (let i = 0; i < 8; i++) {
      teaserWord.push(wordsplit[i]);
    }
    return teaserWord;
};