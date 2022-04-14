export const checkWasLiked = (id: string, likes: string[]) => {
  const wasLiked = !!likes.find((like) => {
    return like === id;
  });

  return wasLiked;
};
