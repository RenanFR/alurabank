export abstract class View<T> {
    private _elemento: JQuery;

    constructor(elemBase: string) {
        this._elemento = $(elemBase);
    }

    render(varTemplate: T) {
        this._elemento.html(this.templateString(varTemplate));
    }

    abstract templateString(varTemplate: T): string;
}