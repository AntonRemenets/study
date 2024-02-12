// дан массив чисел длиной N
// вернуть мажорный элемент
// мажорный элемент - элемент который встречатся более чем N / 2 раз

function majorityElement(nums: number[]) {
  const newArray = new Map<number, number>()

  nums.forEach(num => {
    let key = (newArray.get(num) || 0) + 1
    newArray.set(num, key)
  })
  const element = Math.max(...newArray.values())
  const newArray2 = new Map([...newArray.entries()].map(([k, v]) => [v, k]))

  return newArray2.get(element)
}


console.log(majorityElement([0, 1, 44, 1, 44, 1]))