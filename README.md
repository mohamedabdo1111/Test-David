# Prefix Tree (Trie) Implementation in JavaScript (Functional)

## Overview

This project implements a prefix tree (Trie) in JavaScript using functional programming principles. It supports the following operations:

- **create**: Create a new prefix tree
- **insert**: Insert a word into the tree (returns a new tree)
- **lookup**: Search for a word in the tree
- **deleteWord**: Remove a word from the tree (returns a new tree)

A demo script is provided to showcase how the prefix tree works.

## Files

- `prefixTree.js`: Contains the functional prefix tree implementation
- `demo.js`: Demo script to show usage of the prefix tree

## How to Run the Demo

1. **Clone the repository** (if not already):

   ```sh
   git clone <your-repo-url>
   cd <repo-directory>
   ```

2. **Run the demo script:**
   ```sh
   node demo.js
   ```

You should see output in the console demonstrating the creation, insertion, lookup, and deletion operations on the prefix tree.

## Example Output

```
--- Functional Prefix Tree (Trie) Demo ---
Created a new Prefix Tree.
Inserted: cat
Inserted: car
Inserted: cart
Inserted: dog
Inserted: dart
Lookup 'cat': Found
Lookup 'car': Found
Lookup 'cart': Found
Lookup 'dog': Found
Lookup 'dart': Found
Lookup 'do': Not Found
Lookup 'bat': Not Found
Deleted: cart
Lookup after delete 'cat': Found
Lookup after delete 'car': Found
Lookup after delete 'cart': Not Found
Lookup after delete 'dog': Found
Lookup after delete 'dart': Found
```

## API

- `create()`: Returns a new empty trie.
- `insert(trie, word)`: Returns a new trie with the word inserted.
- `lookup(trie, word)`: Returns `true` if the word exists, `false` otherwise.
- `deleteWord(trie, word)`: Returns a new trie with the word removed.

## Author

David George Williams
