export const converter = number => {
  let result = "";
  const arabicValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanValues = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  
  if (number && typeof number === "number" && number <= 10000 && number > 0) {
  for (let iterator = 0; iterator < arabicValues.length; iterator++) {
    if (number >= arabicValues[iterator]) {
      switch (number) {
        case number >= 5 && number <= 8:
          number -= 5;
          break;
        case number >= 1 && number <= 3:
          number -= 1;
          break;
        default:
          number -= arabicValues[iterator]
          break;
      }
      result += romanValues[iterator];
      iterator--;
    }
  }

    return result;

  } else {
    return "Invalid value!";
  }
}
