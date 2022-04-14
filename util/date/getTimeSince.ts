export const getTimeSince = (timestamp: number) => {
  const seconds: number = Math.floor((new Date().getTime() - timestamp) / 1000);
  let interval: number = seconds / 31536000;
  if (interval > 1) {
    return (
      "Há " +
      Math.floor(interval).toString() +
      `${Math.floor(interval) > 1 ? " anos" : " ano"}`
    );
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return (
      "Há " +
      Math.floor(interval).toString() +
      `${Math.floor(interval) > 1 ? " meses" : " mês"}`
    );
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return (
      "Há " +
      Math.floor(interval).toString() +
      `${Math.floor(interval) > 1 ? " dias" : " dia"}`
    );
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return (
      "Há " +
      Math.floor(interval).toString() +
      `${Math.floor(interval) > 1 ? " horas" : " hora"}`
    );
  }
  interval = seconds / 60;
  if (interval > 1) {
    return (
      "Há " +
      Math.floor(interval).toString() +
      `${Math.floor(interval) > 1 ? " minutos" : " minuto"}`
    );
  }
  return (
    "Há " +
    Math.floor(seconds).toString() +
    `${Math.floor(interval) > 1 ? " segundos" : " segundo"}`
  );
};
