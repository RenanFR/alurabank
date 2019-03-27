System.register(["../views/NegociacoesView", "../views/MensagemView", "../models/Negociacao", "../models/Negociacoes", "../helpers/decorators/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var NegociacoesView_1, MensagemView_1, Negociacao_1, Negociacoes_1, index_1, NegociacaoController, DiaSemana;
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
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new Negociacoes_1.Negociacoes;
                    this._negociacoesView = new NegociacoesView_1.NegociacoesView("#negociacoesView");
                    this._mensagemView = new MensagemView_1.MensagemView("#mensagemView", true);
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
                importaDados() {
                    function isOk(res) {
                        if (res.ok) {
                            return res;
                        }
                        else {
                            throw new Error(res.statusText);
                        }
                    }
                    fetch('http://localhost:8080/dados')
                        .then(res => isOk(res))
                        .then(res => res.json())
                        .then((returnData) => {
                        returnData
                            .map(np => new Negociacao_1.Negociacao(new Date(), np.vezes, np.montante))
                            .forEach(neg => this._negociacoes.adc(neg));
                        this._negociacoesView.render(this._negociacoes);
                    })
                        .catch(erro => console.log(erro.message));
                }
            };
            __decorate([
                index_1.injectFromDom('#valor')
            ], NegociacaoController.prototype, "_iptValor", void 0);
            __decorate([
                index_1.injectFromDom('#quantidade')
            ], NegociacaoController.prototype, "_iptQuantidade", void 0);
            __decorate([
                index_1.injectFromDom('#data')
            ], NegociacaoController.prototype, "_iptData", void 0);
            __decorate([
                index_1.logTempoExecucao(true)
            ], NegociacaoController.prototype, "adc", null);
            __decorate([
                index_1.throttle(1000)
            ], NegociacaoController.prototype, "importaDados", null);
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
