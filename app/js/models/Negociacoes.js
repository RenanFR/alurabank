class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    adc(negociacao) {
        this._negociacoes.push(negociacao);
    }
    vetor() {
        return [].concat(this._negociacoes);
    }
}
