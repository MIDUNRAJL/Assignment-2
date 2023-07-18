let arr = ["edstem", "tech"];

const snakeCase = arr.reduce((a, a1) => a + '_' + a1);

console.log(snakeCase);