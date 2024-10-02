export const sort = (arr: string[]): string[] => {
  return arr.sort();
};

export const isPalindrome = (str: string): boolean => {
  // Inverte a string e compara com a original
  const reversed = str.split("").reverse().join("");
  return str === reversed; // Retorna true se a string for igual à sua versão invertida
};
