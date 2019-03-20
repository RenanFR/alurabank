class Negociacoes {

    private _negociacoes : Negociacao[] = [];

    adc(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    vetor(): Negociacao[] {
        return [].concat(this._negociacoes);
    }

}