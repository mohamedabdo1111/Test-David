// Functional Prefix Tree (Trie) implementation in JavaScript

// Create an empty trie
function create() {
  return { children: {}, isEndOfWord: false };
}

// Insert a word into the trie (returns a new trie)
function insert(trie, word) {
  if (word.length === 0) {
    return { ...trie, isEndOfWord: true };
  }
  const [char, ...rest] = word;
  return {
    ...trie,
    children: {
      ...trie.children,
      [char]: insert(trie.children[char] || create(), rest.join("")),
    },
  };
}

// Lookup a word in the trie (returns boolean)
function lookup(trie, word) {
  let node = trie;
  for (const char of word) {
    if (!node.children[char]) return false;
    node = node.children[char];
  }
  return node.isEndOfWord;
}

// Delete a word from the trie (returns a new trie)
function deleteWord(trie, word) {
  function _delete(node, w) {
    if (!node) return [null, false];
    if (w.length === 0) {
      if (!node.isEndOfWord) return [node, false];
      const newNode = { ...node, isEndOfWord: false };
      if (Object.keys(newNode.children).length === 0) return [null, true];
      return [newNode, true];
    }
    const [char, ...rest] = w;
    if (!node.children[char]) return [node, false];
    const [child, shouldDelete] = _delete(node.children[char], rest.join(""));
    if (!shouldDelete) return [node, false];
    const newChildren = { ...node.children };
    if (child === null) {
      delete newChildren[char];
    } else {
      newChildren[char] = child;
    }
    if (Object.keys(newChildren).length === 0 && !node.isEndOfWord) {
      return [null, true];
    }
    return [{ ...node, children: newChildren }, true];
  }
  return _delete(trie, word)[0] || create();
}

module.exports = { create, insert, lookup, deleteWord };
