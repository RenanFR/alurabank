System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function throttle(millisegundos = 500) {
        return function (alvo, nomeMetodo, metodo) {
            const metodoOriginal = metodo.value;
            let temporizador = 0;
            metodo.value = function (...args) {
                clearTimeout(temporizador);
                temporizador = setTimeout(() => metodoOriginal.apply(this, args), millisegundos);
            };
            return metodo;
        };
    }
    exports_1("throttle", throttle);
    return {
        setters: [],
        execute: function () {
        }
    };
});
