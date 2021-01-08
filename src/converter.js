export const converter = number => {
  let result = "";
  const arabicValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanValues = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  if (typeof number === "number" && number <= 10000 && number > 0) {
    for (let iterator = 0; iterator < arabicValues.length; iterator++) {
      if (number >= arabicValues[iterator]) {
        number -= arabicValues[iterator]
        result += romanValues[iterator];
        iterator--;
      }
    }

    return result;

  } else {
    if(typeof number !== 'number'){
      return `Invalid type ${typeof number}, only number supported`;
    } else if(number > 10000 || number <= 0) {
      return 'Invalid value, the number can be between 1-10.000';
    } 
  }
}
