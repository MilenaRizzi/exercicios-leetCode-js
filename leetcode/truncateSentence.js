/**Você recebe uma sentenças​​​​​​ e um inteiro k​​​​​. 
 * Você deseja truncar s de forma que contenha apenas as primeiras k palavras. 
 * Retorne depoiss de truncá- lo. */

function truncateSentence(s, k){
    let words = s.split(' ');
    let result = '';
    for(let i = 0; i < k; i++) {
        result += `${words[i]} `
    }
    return result.trim();
}

console.log(truncateSentence("Hello how are you Contestant",4));
console.log(truncateSentence("What is the solution to this problem",4));
console.log(truncateSentence("chopper is not a tanuki",5));
