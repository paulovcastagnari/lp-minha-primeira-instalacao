export const formatPhoneString = (phone: string) => {
  const phoneNumbers = phone.replace(/\D/g, "");
  const ddd = phoneNumbers.substr(0, 2);

  let n1 = "";
  let n2 = "";

  if (phoneNumbers.length === 10) {
    n1 = phoneNumbers.substr(2, 4);
    n2 = phoneNumbers.substr(6, 4);
  } else {
    n1 = phoneNumbers.substr(2, 5);
    n2 = phoneNumbers.substr(7, 4);
  }

  return `(${ddd}) ${n1}-${n2}`;
};
