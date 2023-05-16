const checkBrackets = (str: string): boolean => {
  let leftBrackets = 0
  let rightBrackets = 0

  for (let index = 0; index < str.length; index++) {
    if (str[index] === '(') leftBrackets += 1
    if (str[index] === ')') rightBrackets += 1
  }

  return leftBrackets === rightBrackets ? true : false
}

const input: string = ''

console.log(checkBrackets(input))