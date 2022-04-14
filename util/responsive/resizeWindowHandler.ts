export const resizeWindowHandler = (elm: HTMLDivElement) => {
  const vh = window.innerHeight;
  elm?.style?.setProperty("--vh", `${vh}px`);
};
