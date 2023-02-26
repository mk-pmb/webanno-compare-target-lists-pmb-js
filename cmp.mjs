// -*- coding: utf-8, tab-width: 2 -*-

import sortedJson from 'safe-sortedjson';


function jsonizeTargets(anno) {
  return [].concat(anno.target).map(sortedJson);
}


const EX = function compareTargetLists(oldAnno, newAnno) {
  const oldTgtList = jsonizeTargets(oldAnno);
  const newTgtList = jsonizeTargets(newAnno);
  const commonJsonOld = [];
  const commonJsonNew = [];
  const diff = {
    removed: [],
    added: [],
    commonInOld: [],
    commonInNew: [],
  };

  function side(list, other, commonUnpacked, commonJson, only) {
    list.forEach(function learn(tg) {
      const un = JSON.parse(tg);
      if (other.includes(tg)) {
        commonJson.push(tg);
        return commonUnpacked.push(un);
      }
      only.push(un);
    });
  }

  side(oldTgtList, newTgtList, diff.commonInOld, commonJsonOld, diff.removed);
  side(newTgtList, oldTgtList, diff.commonInNew, commonJsonNew, diff.added);
  diff.commonSameOrder = (commonJsonOld.join(',') === commonJsonNew.join(','));
  diff.reordered = !diff.commonSameOrder;

  return diff;
};


export default EX;
