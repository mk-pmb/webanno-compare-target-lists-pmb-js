// -*- coding: utf-8, tab-width: 2 -*-

import sortedJson from 'safe-sortedjson';


function jsonizeTargets(anno) {
  return [].concat(anno.target).map(sortedJson);
}


const EX = function compareTargetLists(oldAnno, newAnno) {
  const oldTgtList = jsonizeTargets(oldAnno);
  const newTgtList = jsonizeTargets(newAnno);
  const cmO = [];
  const cmN = [];
  const diff = {
    removed: [],
    added: [],
    commonInOld: cmO,
    commonInNew: cmN,
  };

  function side(list, other, common, only) {
    list.forEach(function learn(tg) {
      const un = JSON.parse(tg);
      if (other.includes(tg)) { return common.push(un); }
      only.push(un);
    });
  }

  side(oldTgtList, newTgtList, cmO, diff.removed);
  side(newTgtList, oldTgtList, cmN, diff.added);
  diff.reordered = (cmO.join('\n') !== cmN.join('\n'));

  return diff;
};


export default EX;
