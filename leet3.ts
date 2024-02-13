// дано n-значное число Х
// вывести число в обрятном порядке сохраняя знак если он есть
// 123 => 321   -443 => -344 120 => 21
function reverse(x: number): number {
  let array2: string[] = []
  let array1 = [...x.toString()].map(n => array2.unshift(n))
  const sign = array2[array2.length - 1]
  const myNum = (sign === '-') ? Number(array2.slice(0, -1).join('')) * -1 : Number(array2.join(''))

  if (myNum <= -(2 ** 31) || myNum >= 2 ** 31) { return 0 } else { return myNum }
}

console.log(reverse(-120))