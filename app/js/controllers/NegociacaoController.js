class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes;
        this._negociacoesView = new NegociacoesView("#negociacoesView");
        this._mensagemView = new MensagemView("#mensagemView");
        this._iptValor = $("#valor");
        this._iptQuantidade = $("#quantidade");
        this._iptData = $("#data");
        this._negociacoesView.render(this._negociacoes);
    }
    adc(evento) {
        event.preventDefault();
        const negoc = new Negociacao(new Date(this._iptData.val().replace(/-/g, ',')), parseInt(this._iptQuantidade.val()), parseFloat(this._iptValor.val()));
        this._negociacoes.adc(negoc);
        this._negociacoesView.render(this._negociacoes);
        this._mensagemView.render("Negociação incluída com sucesso. ");
        console.log(negoc);
    }
}
