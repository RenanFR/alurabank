import { NegociacoesView } from '../views/NegociacoesView';
import { MensagemView } from '../views/MensagemView';
import { Negociacao } from '../models/Negociacao';
import { Negociacoes } from '../models/Negociacoes';
export class NegociacaoController {

    private _iptValor : JQuery;
    private _iptQuantidade : JQuery;
    private _iptData : JQuery;
    private _negociacoes = new Negociacoes;
    private _negociacoesView = new NegociacoesView("#negociacoesView");
    private _mensagemView = new MensagemView("#mensagemView", true);

    constructor() {
        this._iptValor = $("#valor");
        this._iptQuantidade = $("#quantidade");
        this._iptData = $("#data");
        this._negociacoesView.render(this._negociacoes);
    }

    adc(evento : Event) {
        
        evento.preventDefault();
        let dataNegociacao = new Date(this._iptData.val().replace(/-/g, ','));
        if (!this._checkDiaUtil(dataNegociacao)) {
            this._mensagemView.render('Negociações são permitidas apenas em dia útil.');
            return;
        }
        const negoc 
            = new Negociacao(dataNegociacao,
                parseInt(this._iptQuantidade.val()),
                parseFloat(this._iptValor.val()));
        this._negociacoes.adc(negoc);
        this._negociacoesView.render(this._negociacoes);
        this._mensagemView.render("Negociação incluída com sucesso. ");
        console.log(negoc);

    }

    private _checkDiaUtil(data: Date) {
        if (data.getDay() == DiaSemana.SAB || data.getDay() == DiaSemana.DOM) {
            return false;
        } else {
            return true;
        }
    }

}
enum DiaSemana {
    SEG = 1,
    TER = 2,
    QUA = 3,
    QUI = 4,
    SEX = 5,
    SAB = 6,
    DOM = 0
}