module.exports = function check(str, bracketConfig) {
  const brackets = new Map(bracketConfig);
  const stack = [];

  for (char of str) {
    char === brackets.get(stack[stack.length - 1])
      ? stack.pop()
      : stack.push(char)
  }

  return stack.length === 0;
}