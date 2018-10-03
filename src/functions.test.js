/**
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else
 * construct available in Javascript.
 */
let max = (x, y) => {
  if (!isNaN(x) && !isNaN(y)) {
    return Math.max(x, y)
  } else if (!isNaN(x)) {
    return x
  } else if (!isNaN(y)) {
    return y
  }
}

/**
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

let maxOfThree = (x, y, z) => {
  let array = [x, y, z]
  array = array.filter(item => !isNaN(item))
  return array.length > 0 ? Math.max(...array) : NaN
}

/*
 * Define a function sum() that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */

let sum = (x, y) => x + y

/*
 * Define a function sumOfArray that calculates the sum of
 * all the numbers in an array.
 */

let sumOfArray = (arr) => {
  let reducer = (acc, curr) => acc + curr
  return arr.length > 0 ? arr.reduce(reducer, 0) : arr.length
}
/**
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

let isVowel = (x) => {
  if (
    x === 'a' ||
    x === 'A' ||
    x === 'e' ||
    x === 'E' ||
    x === 'i' ||
    x === 'I' ||
    x === 'o' ||
    x === 'O' ||
    x === 'u' ||
    x === 'U'
  ) {
    return true
  } else {
    return false
  }
}

/**
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".
 */

let rovarspraket = (string) => {
  if (typeof string === 'string') {
    let stringArray = string.split('')
    let newStringArray = []
    stringArray.forEach(char => {
      if (!(isVowel(char))) {
        newStringArray.push(char + 'o' + char)
      }
      else {
        newStringArray.push(char)
      }
    })
    return newStringArray.join('')
  }
  else {
    return '0'
  }
}

/**
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

let reverse = (string) => string.split('').reverse().join('')

/**
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

let findLongestWord = (wordsString) => {
  let words = wordsString.split(' ')
  let wordLengths = words.map(word => word.length)
  let maxLength = Math.max(...wordLengths)
  let longestWords = words.filter(word => word.length === maxLength)
  return longestWords[0]
}

/**
 * NOTE: Don't modify anything below this line...
 */

/* eslint-disable no-undef */

import test from "ava";

test("max()", t => {
  t.is(max(1, 3), 3);
  t.is(max(0, 3), 3);
  t.is(max(10, 3), 10);
  t.is(max(-1, -3), -1);
  t.is(max("aaa", 0), 0);
  t.true(isNaN(max("aaa", "bbb")));
});

test("maxOfThree()", t => {
  t.is(maxOfThree(1, 3, 2), 3);
  t.is(maxOfThree(0, 3, -1), 3);
  t.is(maxOfThree(10, 3, 50), 50);
  t.is(maxOfThree(-1, -3, -10), -1);
  t.is(maxOfThree("aaa", 0, 1), 1);
  t.true(isNaN(maxOfThree("aaa", "bbb", "ccc")));
});

test("sum()", t => {
  t.is(sum(8, 11), 19);
  t.is(sum(4, 100), 104);
});

test("sumOfArray()", t => {
  t.is(sumOfArray([1, 2]), 3);
  t.is(sumOfArray([1, 2, 3]), 6);
  t.is(sumOfArray([10, 9, 8]), 27);
  t.is(sumOfArray([]), 0);
});

test("isVowel()", t => {
  t.is(isVowel(0), false);
  t.is(isVowel("B"), false);
  t.is(isVowel("b"), false);
  t.is(isVowel("a"), true);
  t.is(isVowel("E"), true);
});

test("rovarspraket()", t => {
  t.is(rovarspraket("a"), "a");
  t.is(rovarspraket("b"), "bob");
  t.is(rovarspraket("cat"), "cocatot");
  t.is(rovarspraket("javascript"), "jojavovasoscocroripoptot");
  t.is(rovarspraket(0), "0");
});

test("reverse()", t => {
  t.is(reverse("books"), "skoob");
  t.is(reverse("we don't want no trouble"), "elbuort on tnaw t'nod ew");
});

test("findLongestWord()", t => {
  t.is(findLongestWord("book dogs"), "book");
  t.is(findLongestWord("everything"), "life the universe and everything");
});

/* eslint-enable */
