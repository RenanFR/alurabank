System.register(["../views/NegociacoesView", "../views/MensagemView", "../models/Negociacao", "../models/Negociacoes"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NegociacoesView_1, MensagemView_1, Negociacao_1, Negociacoes_1, NegociacaoController;
    return {
        setters: [
            function (NegociacoesView_1_1) {
                NegociacoesView_1 = NegociacoesView_1_1;
            },
            function (MensagemView_1_1) {
                MensagemView_1 = MensagemView_1_1;
            },
            function (Negociacao_1_1) {
                Negociacao_1 = Negociacao_1_1;
            },
            function (Negociacoes_1_1) {
                Negociacoes_1 = Negociacoes_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new Negociacoes_1.Negociacoes;
                    this._negociacoesView = new NegociacoesView_1.NegociacoesView("#negociacoesView");
                    this._mensagemView = new MensagemView_1.MensagemView("#mensagemView");
                    this._iptValor = $("#valor");
                    this._iptQuantidade = $("#quantidade");
                    this._iptData = $("#data");
                    this._negociacoesView.render(this._negociacoes);
                }
                adc(evento) {
                    event.preventDefault();
                    const negoc = new Negociacao_1.Negociacao(new Date(this._iptData.val().replace(/-/g, ',')), parseInt(this._iptQuantidade.val()), parseFloat(this._iptValor.val()));
                    this._negociacoes.adc(negoc);
                    this._negociacoesView.render(this._negociacoes);
                    this._mensagemView.render("Negociação incluída com sucesso. ");
                    console.log(negoc);
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
