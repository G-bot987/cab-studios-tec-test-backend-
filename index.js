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

const isNumbersOnly = (id) => {
  const numbsOnlyRegex = /^[0-9]*$/;

  return id.match(numbsOnlyRegex);
};

const isLetterOnly = (id) => {
  const lettersOnlyRegex = /^[a-zA-Z]*$/;

  return id.match(lettersOnlyRegex);
};

const isLetterAndNumbersOnly = (id) => {
  const lettersAndNumberRegex = /^[0-9a-zA-Z]*$/;

  return id.match(lettersAndNumberRegex);
};

const pushToCorrectArray = (id, index) => {
  if (isNumbersOnly(id)) {
    ids.numberIds.push(id);
    ids.validIds.push(id);
  } else if (isLetterOnly(id)) {
    ids.letterIds.push(id);
    ids.validIds.push(id);
  } else if (isLetterAndNumbersOnly(id)) {
    ids.validIds.push(id);
  } else {
    ids.invalidIds.push({ id, index });
  }
};

idArray.map((id, index) => pushToCorrectArray(id, index));
console.log(ids);
