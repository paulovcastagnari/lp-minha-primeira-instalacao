import { OrderStatusData } from "../../data/types";

export const translateOrderStatus = (originalStatus: OrderStatusData) => {
  switch (originalStatus) {
    case "PENDING":
      return "Pendente";
    case "APPROVED":
      return "Aprovado";
    case "CANCELLED":
      return "Cancelado";
    case "REJECTED":
      return "Rejeitado";
    case "REFUNDED":
      return "Reembolsado";

    default:
      return "";
  }
};
