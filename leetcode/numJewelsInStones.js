/*You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A". */
function numJewelsInStone(jewels, stones) {
    let map = {};
    
    for(let i = 0; i < stones.length; i++){
        if(!map[stones[i]]) {
            map[stones[i]] = 1;
        } else {
            map[stones[i]]++
        }
    }
    let cont = 0;
    for(let key of jewels) {
       if(map.hasOwnProperty(key)){
        cont += map[key]
       }
    }
    return cont;
}

console.log(numJewelsInStone("aA", "aAAbbbb"));
console.log(numJewelsInStone("z", "ZZ"));

