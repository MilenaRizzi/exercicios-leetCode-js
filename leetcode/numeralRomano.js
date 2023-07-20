
console.log(romanoEmInteiro("III"));
console.log(romanoEmInteiro("LVIII"));
console.log(romanoEmInteiro("MCMXCIV"));

function romanoEmInteiro(s) {
    const numeraisRomanos = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let resultado = 0;
    
    for (let i = 0; i < s.length; i++) {
        const atual = numeraisRomanos[s[i]];
        const proximo = numeraisRomanos[s[i + 1]];

        if(proximo > atual){
            resultado += proximo - atual
            i++;
        } else {
            resultado += atual;
        }
    }
    return resultado;

}
