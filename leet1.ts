// дан массив чисел nums и число target.
// найти номера членов массива сумма которых будет равна target

function twoSum(nums: number[], target: number) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if ((nums[i] + nums[j]) == target) {
        return [i, j]
      }
    }
  }
};

// решения от leetcode
function twoSum1(nums: number[], target: number) {
  const map = new Map<number, number>(nums.map((num, index) => [num, index]));

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement) && map.get(complement) !== i) {
      return [i, map.get(complement)];
    }
  }

  return [];
};

function twoSum2(nums: number[], target: number) {
  const numIndexMap: { [key: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numIndexMap.hasOwnProperty(complement)) {
      return [numIndexMap[complement], i];
    }
    numIndexMap[nums[i]] = i;
  }
};

function twoSum3(nums: number[], target: number): number[] {
  // Create a map, this will contain the difference between the numbers in the array and the target
  const diffMap = new Map()
  // iterate through the array and place the difference and its index in the map
  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];
    // check if the element in the array is contained in the map, if so, return those indexes
    if (diffMap.has(difference)) {
      return [i, diffMap.get(difference)]
    }
    diffMap.set(nums[i], i);
  }
  return [-1, -1]
}


function twoSum4(nums: number[], target: number): number[] {
  const tmpObj: Record<number, number> = {}
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in tmpObj) {
      return [tmpObj[target - nums[i]], i];
    }
    tmpObj[nums[i]] = i
  }
  return [-1, -1];
};

