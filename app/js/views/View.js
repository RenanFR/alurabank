class View {
    constructor(elemBase) {
        this._elemento = $(elemBase);
    }
    render(varTemplate) {
        this._elemento.html(this.templateString(varTemplate));
    }
}
