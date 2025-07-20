const { create, insert, lookup, deleteWord } = require("./prefixTree");

console.log("--- Functional Prefix Tree (Trie) Demo ---");

// Create a new prefix tree
let trie = create();
console.log("Created a new Prefix Tree.");

// Insert words
const wordsToInsert = ["cat", "car", "cart", "dog", "dart"];
wordsToInsert.forEach((word) => {
  trie = insert(trie, word);
  console.log(`Inserted: ${word}`);
});

// Lookup words
const wordsToLookup = ["cat", "car", "cart", "dog", "dart", "do", "bat"];
wordsToLookup.forEach((word) => {
  const found = lookup(trie, word);
  console.log(`Lookup '${word}': ${found ? "Found" : "Not Found"}`);
});

// Delete a word
const wordToDelete = "cart";
trie = deleteWord(trie, wordToDelete);
console.log(`Deleted: ${wordToDelete}`);

// Lookup again after deletion
const wordsAfterDelete = ["cat", "car", "cart", "dog", "dart"];
wordsAfterDelete.forEach((word) => {
  const found = lookup(trie, word);
  console.log(
    `Lookup after delete '${word}': ${found ? "Found" : "Not Found"}`
  );
});
