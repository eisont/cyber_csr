export const kebabToTitleCase = (word: string) => {
  return word
    .split('-')
    .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
    .join(' ');
};
