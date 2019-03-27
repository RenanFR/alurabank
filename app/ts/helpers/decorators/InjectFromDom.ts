export function injectFromDom(seletor: string) {
    return function(alvo: any, nomeProp: string) {

        let elem : JQuery;
        const funcaoGet = function() {
            if (!elem) {
                console.log(`Buscando ${seletor} para injecao via decorator em ${nomeProp}`);
                elem = $(seletor);    
            }
            return elem;
        }
        Object.defineProperty(alvo, nomeProp, {
            get: funcaoGet
        })

    }
}