'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  let commonElements = [];
  collection_a.forEach(a => {
    if (!collection_b.includes(a)) {
      commonElements.push(a);
    }
    // commonElements.push(collection_b.filter(b => a.)[0]);
  });
  return commonElements;
  // return commonElements.filter(element => element != undefined);
}

module.exports = choose_no_common_elements;
