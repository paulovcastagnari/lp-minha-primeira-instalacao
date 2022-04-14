import { OrderPaymentTypeData } from "../../data/types";

export const translatePaymentType = (paymentType: OrderPaymentTypeData) => {
  switch (paymentType) {
    case "PIX":
      return "Pix";
    case "CARD":
      return "Cartão";
    case "BILL":
      return "Boleto";

    default:
      return "";
  }
};
