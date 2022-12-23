export function enumIncludesValue(
  enumCollection: { [s: string]: string },
  value: string
) {
  return Object.values<string>(enumCollection).includes(value);
}
