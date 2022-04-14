export const openNotificationUrl = async (notification: Notification) => {
  const webWorkerSelf = self as unknown as any;
  const allClients = await webWorkerSelf.clients.matchAll();

  const client = allClients.find((c: any) => {
    return c.visibilityState === "visible";
  });

  if (client !== undefined) {
    await client.navigate(notification.data.url);
    await client.focus();
  } else {
    await webWorkerSelf.clients.openWindow(notification.data.url);
  }

  notification.close();
};
