export function logTempoExecucao(emSegundos: boolean = false) {

    return function(tipoAlvo: any, nomeAlvo: string, alvo: PropertyDescriptor) {
        const metodoInterceptado = alvo.value;
        let divisor = 1;
        let unidade = 'ms';
        if (emSegundos) {
            divisor = 1000;
            unidade = 's';
        }
        alvo.value = function(...args: any[]) {
            console.log('********************');
            let tempoInicio = performance.now();
            console.log(`Metodo invocado ${nomeAlvo}`);
            console.log(`Parametros passados ${JSON.stringify(args)}`);
            const retorno = metodoInterceptado.apply(this, args);
            let tempoFinal = performance.now();
            console.log(`O metodo retornou ${JSON.stringify(retorno)}`);
            console.log(`O tempo de execucao constatado foi ${(tempoInicio - tempoFinal)/divisor} ${unidade}`);
            console.log('********************');
            return retorno;
        }
        return alvo;
    }

}