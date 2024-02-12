// дан массив чисел длиной N
// вернуть мажорный элемент
// мажорный элемент - элемент который встречатся более чем N / 2 раз

function majorityElement(nums: number[]) {
  //const newArray = new Map<number, number>()

  let result = {}
  nums.forEach(function (a) {
    result[a] = result[a] + 1 || 1
    //const element = Math.max(...newArray.keys())
    //return newArray.get(element)
  })
  console.log(result)
}

console.log(majorityElement([110, 2, 8, 110, 5, 7]))