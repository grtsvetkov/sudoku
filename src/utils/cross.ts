export const cross = (a: string, b: string): string[] =>
  a.split('').map((curr, index) => curr + b[index]);