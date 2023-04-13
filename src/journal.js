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