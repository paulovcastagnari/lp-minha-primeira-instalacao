import { checkIsMobile } from "../responsive/checkIsMobile";

export const openWhatsApp = (number: string, message: string = "") => {
  let apilink = "http://";
  const isMobile = checkIsMobile();
  const phone = `55${number}`;
  apilink += isMobile ? "api" : "web";
  apilink +=
    ".whatsapp.com/send?phone=" + phone + "&text=" + encodeURI(message);
  window.open(apilink);
};
