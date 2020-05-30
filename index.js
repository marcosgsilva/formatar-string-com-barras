const data = "543534\\tAPLICAÇÃO\\t04/03/2020\\t150.0004440\\tAGENDADO\\tCAIXA\\t3\\t0\\t21\\t\\n81934\\tAPLICAÇÃO EM POUPANÇA\\t18/03/2020\\t10.0000\\tAGENDADO\\tCAIXA\\t3\\t0\\t21\\t\\n";


const atributos = ["teste1", "teste2", "teste3", "teste4", "teste5", "teste6", "teste7", "teste8", "teste9"];

const converteStringEmArray = (data, atributos) => {
    const retorno = [];
    let quebraPorValor = [];
    const quebraporregistro = data.split(/\\n/);
    quebraporregistro.filter(data => {
        quebraPorValor = data.split(/\\t/).map((data, index) => {
            if (data !== "") {
                return [atributos[index], data];
            }
        });
        retorno.push(quebraPorValor);
    });

    return retorno;
};


const formataRetornoStringCTR = (data) => {
    let formataString = "";
    converteStringEmArray(data, atributos).forEach((data) => {
        if (data[0] !== undefined)
            data.map(line => {
                if (line !== undefined && line[1] !== null) {
                    formataString += line[0] + ": " + line[1] + " \n";
                }
            });
        formataString += `\n\n`;

    });
    return formataString;

};


console.log(formataRetornoStringCTR(data, atributos));

