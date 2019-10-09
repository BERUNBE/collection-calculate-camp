'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  let commonElements = [];

  collection_a.forEach(a => {
    if (collection_b.filter(b => a%b == 0).length > 0) {
      commonElements.push(a);
    }
  });

  return commonElements.filter(element => element != undefined);
}

module.exports = choose_divisible_integer;
