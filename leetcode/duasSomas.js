console.log(soma([2, 7, 11, 15], 9));
console.log(soma([3, 2, 4], 6));
console.log(soma([3, 3], 6));
console.log(soma([2, 5, 5, 11], 10));
console.log(soma([-1, -2, -3, -4, -5], -8));

//retornar os indices dos numeros que somados dão o valor de alvo
function soma(nums, alvo) {
  
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] + nums[i] === target) {
                return [i, j]
            }
        }
    }
}

/* De primeira fiz assim mas poderia ser reduzido ainda mais
    const resultado = [];
    let iP;
    let yP;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let y = i + 1; y < nums.length; y++) {
            if (nums[i] + nums[y] === alvo) {
                iP = i
                yP = y
            }
        }
    }
    resultado.push(iP, yP)
    return resultado;
     */