System.register(["../views/NegociacoesView", "../views/MensagemView", "../models/Negociacao", "../models/Negociacoes"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NegociacoesView_1, MensagemView_1, Negociacao_1, Negociacoes_1, NegociacaoController, DiaSemana;
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
                    this._mensagemView = new MensagemView_1.MensagemView("#mensagemView", true);
                    this._iptValor = $("#valor");
                    this._iptQuantidade = $("#quantidade");
                    this._iptData = $("#data");
                    this._negociacoesView.render(this._negociacoes);
                }
                adc(evento) {
                    evento.preventDefault();
                    let dataNegociacao = new Date(this._iptData.val().replace(/-/g, ','));
                    if (!this._checkDiaUtil(dataNegociacao)) {
                        this._mensagemView.render('Negociações são permitidas apenas em dia útil.');
                        return;
                    }
                    const negoc = new Negociacao_1.Negociacao(dataNegociacao, parseInt(this._iptQuantidade.val()), parseFloat(this._iptValor.val()));
                    this._negociacoes.adc(negoc);
                    this._negociacoesView.render(this._negociacoes);
                    this._mensagemView.render("Negociação incluída com sucesso. ");
                    console.log(negoc);
                }
                _checkDiaUtil(data) {
                    if (data.getDay() == DiaSemana.SAB || data.getDay() == DiaSemana.DOM) {
                        return false;
                    }
                    else {
                        return true;
                    }
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
            (function (DiaSemana) {
                DiaSemana[DiaSemana["SEG"] = 1] = "SEG";
                DiaSemana[DiaSemana["TER"] = 2] = "TER";
                DiaSemana[DiaSemana["QUA"] = 3] = "QUA";
                DiaSemana[DiaSemana["QUI"] = 4] = "QUI";
                DiaSemana[DiaSemana["SEX"] = 5] = "SEX";
                DiaSemana[DiaSemana["SAB"] = 6] = "SAB";
                DiaSemana[DiaSemana["DOM"] = 0] = "DOM";
            })(DiaSemana || (DiaSemana = {}));
        }
    };
});
