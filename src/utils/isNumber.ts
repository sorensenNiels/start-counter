export const isNumber = (value: unknown): value is number => {
  return typeof value === 'number' || value instanceof Number;
};
