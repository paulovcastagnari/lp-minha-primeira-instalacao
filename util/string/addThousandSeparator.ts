export const addThousandSeparator = (
  number: string | number,
  isString = false,
  isFloat = true
) => {
  let nStr = "";
  if (typeof number === "number" && isFloat) {
    nStr = number.toFixed(2).toString().replace(".", ",");
  } else if (typeof number === "number" && !isFloat) {
    nStr = number.toString();
  } else if (typeof number === "string") {
    nStr = number.replace(".", ",");
  }

  let x = nStr.split(",");
  let x1 = x[0];
  let x2 = x[1]
    ? x[1].length > 1
      ? "," + x[1]
      : "," + x[1] + "0"
    : isFloat
    ? ",00"
    : "";
  let rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + "." + "$2");
  }
  return x1 + x2;
};
