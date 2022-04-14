import { AccessStatusData } from "../../data/types";

export const translateAccessStatus = (originalStatus: AccessStatusData) => {
  switch (originalStatus) {
    case "PENDING":
      return "Pendente";
    case "ACTIVE":
      return "Ativo";
    case "FREE":
      return "Ativo Grátis";
    case "CANCELLED":
      return "Cancelado";
    case "BLOCKED":
      return "Cancelado";
    case "EXPIRED":
      return "Expirado";

    default:
      return "";
  }
};
