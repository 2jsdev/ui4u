export function getPackageName(input: string) {
  if (input.startsWith('@')) {
    return input;
  }

  return `@2jsdev/${input}`;
}
