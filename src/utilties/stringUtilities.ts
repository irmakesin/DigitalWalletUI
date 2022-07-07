export const formatForCCExp = (string: string): string => {
  return string
    .replace(
      /[^0-9]/g,
      "" // To allow only numbers
    )
    .replace(
      /^([2-9])$/g,
      "0$1" // To handle 3 > 03
    )
    .replace(
      /^(1{1})([3-9]{1})$/g,
      "0$1/$2" // 13 > 01/3
    )
    .replace(
      /^0{1,}/g,
      "0" // To handle 00 > 0
    )
    .replace(
      /^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g,
      "$1/$2" // To handle 113 > 11/3
    );
};

export const getFormattedCardNumber = (string: string): string => {
  // add - for every 4 digits
  return string
    .replace(
      /[^0-9]/g,
      "" // To allow only numbers
    )
    .replace(
      /^([0-9]{4})([0-9]{4})([0-9]{4})([0-9]{4}).*/g,
      "$1-$2-$3-$4" // To handle 1111 > 1111-1111-1111-1111
    );
};

export const getDateFromCCExp = (string: string): string => {
  const [month, year] = string.split("/");
  return new Date(Number(year), Number(month) - 1).toString();
};
