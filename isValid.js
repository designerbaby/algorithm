function isValid (s) {
  const matchMap = {
    '{': '}',
    '[': ']',
    '(': ')'
  };
  const stack = [];
  for (const c of s) {
    if (matchMap[c]) {
      stack.push(c);
    } else {
      if (stack.length == 0) {
        return false;
      }
      const top = stack[stack.length - 1];
      if (matchMap[top] == c) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length == 0
}

console.log(isValid('()'))