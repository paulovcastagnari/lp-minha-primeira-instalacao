import { addThousandSeparator } from "../../util/string/addThousandSeparator";

export const getInstallmentsDisplay = (
  total: number,
  installmentsData: number[]
) => {
  const installmentsDisplay: string[] = [];

  if (total && installmentsData) {
    installmentsData.forEach((installmentTax, i) => {
      const value = (total * installmentTax) / (i + 1);

      installmentsDisplay.push(`${i + 1}x de R$${addThousandSeparator(value)}`);
    });

    return installmentsDisplay;
  }
};
