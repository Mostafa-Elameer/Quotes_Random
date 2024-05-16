var allQuoets = [
  {
    author: "-- Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    author: "-- Frank Zappa.",
    quote: "So many books, so little time..",
  },
  {
    author: "-- Mark Twain",
    quote: "If you tell the truth, you don't have to remember anything.",
  },
  {
    author: "-- Albert Einstein",
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe..",
  },
  {
    author: "-- Wayne Gretzy",
    quote: "You miss 100% of the shots you don't take.",
  },
  {
    author: "--Nelson Mandela",
    quote:
      "Resentment like drinking poison and waiting for your enemies to die.",
  },
];

var lastRandom = -1;

function newQoute() {
  var numRandom = Math.floor(Math.random() * allQuoets.length);
  if (numRandom == lastRandom) {
    numRandom = (numRandom + 1) % allQuoets.length;
  }
  lastRandom = numRandom;

  document.getElementById("QuId").innerHTML = allQuoets[numRandom].quote;
  document.getElementById("AutherId").innerHTML = allQuoets[numRandom].author;
}
