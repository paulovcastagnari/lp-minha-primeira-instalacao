export const formatCpfOrCnpj = (document: string) => {
  let formattedDoc = "";

  if (document?.length < 14) {
    const strA = document.substr(0, 3);
    const strB = document.substr(3, 3);
    const strC = document.substr(6, 3);
    const strD = document.substr(9, 2);

    formattedDoc = `${strA}.${strB}.${strC}-${strD}`;
  } else if (document?.length === 14) {
    const strA = document.substr(0, 2);
    const strB = document.substr(2, 3);
    const strC = document.substr(5, 3);
    const strD = document.substr(8, 4);
    const strE = document.substr(12, 2);

    formattedDoc = `${strA}.${strB}.${strC}/${strD}-${strE}`;
  }

  return formattedDoc;
};
