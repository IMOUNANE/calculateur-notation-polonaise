export const expression = (row) => {
  let result = 0;
  let rowCopy = ifHaveNegateExpression(row);
  const multiExp = [];
  // ex d'expression à split [1, 2, "NEGATE", "+", 6, "+"] => expression 1 = [1, 2, "NEGATE", "+"] expression 2 =[expression 1,  6, "+"]
  // séparer le tableau d'expression en micro expression de deux valeur pour ensuite  effectué les règle de calcule

  rowCopy.map((value, i) => {
    switch (value) {
      case "+":
        result = Number(rowCopy[i - 2] + rowCopy[i - 1]);
        break;
      case "-":
        result = Number(rowCopy[i - 2] - rowCopy[i - 1]);
        break;
      case "*":
        result = Number(rowCopy[i - 2] * rowCopy[i - 1]);
        break;
      case "/":
        result = Number(rowCopy[i - 2] / rowCopy[i - 1]);
        break;
    }
  });
  return result;
};
export const availableExpressions = (exp) => {
  let yourExpressionsIsCheck = true;
  if (exp.length === 0) return (yourExpressionsIsCheck = false);

  exp.forEach((value, i) => {
    if (value < 0) yourExpressionsIsCheck = false;
    if (value === "/" && Number(exp[i - 1]) !== 0) yourExpressionsIsCheck = false;
  });

  return yourExpressionsIsCheck;
};
export const ifHaveNegateExpression = (exp) => {
  let rowCopy = [...exp];
  rowCopy.forEach((value, i) => {
    if (value === "NEGATE") {
      rowCopy[i - 1] = -rowCopy[i - 1];
      rowCopy.splice(i, 1);
    }
  });
  return rowCopy;
};
