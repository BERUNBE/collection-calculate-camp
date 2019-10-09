'use strict';

function choose_common_elements(collection_a, collection_b) {
  let commonElements = [];
  collection_a.forEach(a => {
    commonElements.push(collection_b.filter(b => b === a)[0]);
  });
  return commonElements.filter(element => element != undefined);
}

module.exports = choose_common_elements;
