export const maxCharacter = (string, maxCharacters = 14) => {
  if (!maxCharacters) {
    return string;
  }

  if (string && string.length > maxCharacters) {
    return `${string.slice(0, maxCharacters)}...`;
  }

  return string;
};

export const numberWithCommas = (x) => {
  return x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "";
};

export const getFormatedNumberWithK = (num) =>
  Math.abs(num) > 999
    ? numberWithCommas(Math.sign(num) * (Math.abs(num) / 1000).toFixed(1)) + "K"
    : Math.sign(num) * Math.abs(num);

export const getUpdatedPro = (val, oldVal) =>
  (((val - oldVal) * 100) / oldVal).toFixed(1);

export const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const toCapitalize = (val) => {
  const words = val.split(" ");
  let label = "";
  words.map((word) => (label += capitalizeFirstLetter(word)));
  return label;
};

export const getDateFormatedData = (name, data, query) => {
  if (!data) return;
  return data.map((unit) => {
    let item = {};
    item[name] = Number(unit[query.measures[0]]);
    item[query.timeDimensions[0].granularity] = new Date(
      unit[query.timeDimensions[0].dimension]
    );
    return item;
  });
};

export const mergeTwoArray = (arr1, arr2) => {
  if (!arr1 || !arr2) return;
  return arr1.map((item, i) => Object.assign({}, item, arr2[i]));
};

export const getMaxValue = (arr, key) => {
  if (!arr) return;
  return Math.max(...arr.map((item) => Number(item[key])));
};
