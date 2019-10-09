'use strict';

function choose_no_repeat_number(collection) {
  return collection.filter((item, i, items) => items.indexOf(item) === i);
}

module.exports = choose_no_repeat_number;
