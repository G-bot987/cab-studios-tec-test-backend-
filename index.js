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

// regex  numbs only g for everyinstance

const pushToCorrectArray = (id, index) => {
  //   console.log("current id ", currentId, isLettersOnly);
  const numbsOnlyRegex = /^[0-9]*$/;
  const lettersOnlyRegex = /^[a-zA-Z]*$/;
  const lettersAndNumberRegex = /^[0-9a-zA-Z]*$/;
  const isNumbersOnly = id.match(numbsOnlyRegex);
  const isLettersOnly = id.match(lettersOnlyRegex);
  const isLettersAndNumbersOnly = id.match(lettersAndNumberRegex);
  if (isNumbersOnly) {
    ids.numberIds.push(id);
    ids.validIds.push(id);
  } else if (isLettersOnly) {
    ids.letterIds.push(id);
    ids.validIds.push(id);
  } else if (isLettersAndNumbersOnly) {
    ids.validIds.push(id);
  } else {
    ids.invalidIds.push({ id, index });
  }
};

for (let index = 0; index < idArray.length; index++) {
  const currentId = idArray[index];
  pushToCorrectArray(currentId, index);
  //   console.log("current id ", currentId);
}
console.log(ids);
