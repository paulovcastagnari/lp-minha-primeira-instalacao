export const checkUserOwnsQuestion = (id: string, userQuestions: string[]) => {
  const isUserOwned = !!userQuestions.find((uq) => {
    return uq === id;
  });

  return isUserOwned;
};
