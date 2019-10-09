'use strict';

function grouping_count(collection) {
  let uniqueNumbers = collection.filter((item, i, items) => items.indexOf(item) === i);
  let numberAndCount = {};
  for (let currentNumber of uniqueNumbers) {
    numberAndCount[currentNumber] = collection.filter(n => n === currentNumber).length;
  }
  return numberAndCount;
}

module.exports = grouping_count;
