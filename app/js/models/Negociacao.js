System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negociacao;
    return {
        setters: [],
        execute: function () {
            Negociacao = class Negociacao {
                constructor(data, quantidade, valor) {
                    this._data = data;
                    this._quantidade = quantidade;
                    this._valor = valor;
                }
                get valor() {
                    return this._valor;
                }
                get quantidade() {
                    return this._quantidade;
                }
                get data() {
                    return this._data;
                }
                get volume() {
                    return this._valor * this._quantidade;
                }
            };
            exports_1("Negociacao", Negociacao);
        }
    };
});
