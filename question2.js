// ============================================================================
// QUESTION 2: SquashObjects

//had to use an old ES5 standard to import lodash since this app isn't being compiled
const _ = require("lodash");

const object1 = {
  1: 5,
  2: {
    3: 2,
    9: 6,
    a: {
      2: "hello world",
      7: 5,
      3: false,
    },
  },
};

const object2 = {
  4: 3,
  foo: {
    0: 9,
    5: 5,
    4: {
      6: ["bar", 7, true],
      1: {
        2: 10,
      },
    },
  },
};

const isNumber = (key) => {
  //checking that it is number && forcing the key to be a number which is
  //resulting in 0 therefore we use !!to convert it too a boolean in this case truthy
  return !!key && typeof Number(key) === "number" && !isNaN(Number(key));
};

const isObject = (val) => _.isObject(val) && !_.isArray(val);

function getTotals(obj) {
  const keys = Object.keys(obj);
  //using reducer to add keys and values 
  return keys.reduce(
    (result, key) => {
      const value = obj[key];
      let isKeyNumber = isNumber(key);
      let isValNumber = isNumber(value);

      //setting baseline for iterations
      if (isKeyNumber && isValNumber) {
        return {
          keyTotal: (result.keyTotal += Number(key)),
          valTotal: (result.valTotal += Number(value)),
        };
      } else {
        //running recursion to drill deeper into nested objects and adding them
        if (isObject(value)) {
          return {
            keyTotal: (result.keyTotal += getTotals(value).keyTotal),
            valTotal: (result.valTotal += getTotals(value).valTotal),
          };
        }
      }
      return result;
    },
    { keyTotal: 0, valTotal: 0 }
  );
}

function squashObject(obj) {
  const totals = getTotals(obj);
  return { [totals.keyTotal]: totals.valTotal };
}

const res = squashObject(object1);
const res2 = squashObject(object2);

console.log(res);
console.log(res2);

// squashObject(object1); // returns {20: 18}
// squashObject(object2); // returns {11: 27}

// This function accepts an object and returns an object with a single key-value pair.

// It should search through an object and find key-value pairs where both are numbers.

// It should then return an object where the key is the sum of all valid keys, and the value is the sum of all valid values.
// ===========================================================================
