export const difficulty = (difficulty: string) => {
  let difficulties: any = {
    easy: 'Easy',
    medium: 'Medium',
    hard: 'Hard',
  };
  return difficulties[difficulty];
};
