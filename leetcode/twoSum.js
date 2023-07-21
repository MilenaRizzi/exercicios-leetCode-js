//retornar os indices dos numeros que somados dão o valor de alvo
function soma(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.hasOwnProperty(complement)) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }
  
  return [];
}

console.log(soma([2, 7, 11, 15], 9));
console.log(soma([3, 2, 4], 6));
console.log(soma([3, 3], 6));
console.log(soma([2, 5, 5, 11], 10));
console.log(soma([-1, -2, -3, -4, -5], -8));
