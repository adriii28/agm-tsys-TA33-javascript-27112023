let resultados  = [];

for (let i = 0; i < 36000; i++) {

    let num1 = Math.floor(Math.random() * 6) + 1;
    let num2 = Math.floor(Math.random() * 6) + 1;

    let sumaDados = num1 + num2;

    resultados.push(sumaDados);
}


console.log(resultados);
