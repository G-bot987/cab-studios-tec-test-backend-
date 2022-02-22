const idArray = [
  `3wWY6`,
  `1zxcz`,
  `01743`,
  `qwerty`,
  `4w0j7`,
  `ARNsf`,
  `18335`,
  `NpnBU`,
  `Q_9ce`,
  `5DDMo`,
  `99785`,
  `65742`,
  `ugKTV`,
  `VtUyC`,
  `hKeXz`,
  `76243`,
];

// an object with arrays to push ids too.map
const ids = {
  validIds: [],
  letterIds: [],
  numberIds: [],
  invalidIds: [],
};

for (let index = 0; index < idArray.length; index++) {
  const currentId = idArray[index];
  //   console.log("current id ", currentId);

  // regex  numbs only g for everyinstance
  const numbsOnlyRegex = /^[0-9]*$/;
  const lettersOnlyRegex = /^[a-zA-Z]*$/;
  const lettersAndNumberRegex = /^[0-9a-zA-Z]*$/;
  const isNumbersOnly = currentId.match(numbsOnlyRegex);
  const isLettersOnly = currentId.match(lettersOnlyRegex);
  const isLettersAndNumbersOnly = currentId.match(lettersAndNumberRegex);

  //   console.log("current id ", currentId, isLettersOnly);
  if (isNumbersOnly) {
    ids.numberIds.push(currentId);
    ids.validIds.push(currentId);
  } else if (isLettersOnly) {
    ids.letterIds.push(currentId);
    ids.validIds.push(currentId);
  } else if (isLettersAndNumbersOnly) {
    ids.validIds.push(currentId);
  } else {
    ids.invalidIds.push({id: currentId, index: index});
  }
}
console.log(ids);
