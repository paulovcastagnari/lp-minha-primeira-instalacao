export const displayConfirmNotification = async () => {
  if ("serviceWorker" in navigator) {
    const sw = await navigator.serviceWorker.ready;
    const options = {
      body: "Você habilitou notificações com sucesso!",
      icon: `${process.env.NEXT_PUBLIC_BASE_URL}/energia-lucrativa-icon-96x96.png`,
      dir: "ltr" as "ltr",
      lang: "pt-BR",
      vibrate: [100, 50, 200],
      badge: `${process.env.NEXT_PUBLIC_BASE_URL}/energia-lucrativa-icon-96x96.png`,
      tag: "confirm-notification",
      renotify: true,
    };
    await sw.showNotification("Notificações Habilitadas!", options);
  }
};
