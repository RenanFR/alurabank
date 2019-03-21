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
    private _mensagemView = new MensagemView("#mensagemView");

    constructor() {
        this._iptValor = $("#valor");
        this._iptQuantidade = $("#quantidade");
        this._iptData = $("#data");
        this._negociacoesView.render(this._negociacoes);
    }

    adc(evento : Event) {
        
        event.preventDefault();
        const negoc 
            = new Negociacao(new Date(this._iptData.val().replace(/-/g, ',')),
                parseInt(this._iptQuantidade.val()),
                parseFloat(this._iptValor.val()));
        this._negociacoes.adc(negoc);
        this._negociacoesView.render(this._negociacoes);
        this._mensagemView.render("Negociação incluída com sucesso. ");
        console.log(negoc);

    }

}