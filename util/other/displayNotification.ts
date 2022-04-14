//Function for displaying notifications
export const displayNotification = async (
  title: string,
  content: string,
  openUrl: string
) => {
  const options = {
    body: content,
    icon: `${process.env.NEXT_PUBLIC_BASE_URL}/energia-lucrativa-icon-96x96.png`,
    dir: "ltr" as "ltr",
    lang: "pt-BR",
    vibrate: [100, 50, 200],
    badge: `${process.env.NEXT_PUBLIC_BASE_URL}/energia-lucrativa-icon-96x96.png`,
    tag: "general-notification",
    renotify: true,
    data: {
      url: openUrl,
    },
  };

  const webWorkerSelf = self as unknown as any;
  await webWorkerSelf.registration.showNotification(title, options);
};
