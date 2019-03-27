System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function injectFromDom(seletor) {
        return function (alvo, nomeProp) {
            let elem;
            const funcaoGet = function () {
                if (!elem) {
                    console.log(`Buscando ${seletor} para injecao via decorator em ${nomeProp}`);
                    elem = $(seletor);
                }
                return elem;
            };
            Object.defineProperty(alvo, nomeProp, {
                get: funcaoGet
            });
        };
    }
    exports_1("injectFromDom", injectFromDom);
    return {
        setters: [],
        execute: function () {
        }
    };
});
