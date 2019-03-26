import { Negociacao } from './Negociacao';
export class Negociacoes {

    private _negociacoes : Negociacao[] = [];

    adc(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    vetor(): Negociacao[] {
        return ([] as Negociacao[]).concat(this._negociacoes);
    }

}