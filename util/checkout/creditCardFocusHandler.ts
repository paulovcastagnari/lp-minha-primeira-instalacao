export const creditCardFocusHandler = (
  event: React.FocusEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLDivElement
  >,
  setCardFocus: React.Dispatch<
    React.SetStateAction<"number" | "name" | "expiry" | "cvc">
  >
) => {
  switch (event.target.id) {
    case "cardNumber":
      setCardFocus("number");
      break;
    case "cardName":
      setCardFocus("name");
      break;
    case "expMonth":
      setCardFocus("expiry");
      break;
    case "expYear":
      setCardFocus("expiry");
      break;
    case "securityCode":
      setCardFocus("cvc");
      break;
    default:
      setCardFocus("number");
      break;
  }
};
