import { logTempoExecucao } from '../helpers/decorators/index';

export abstract class View<T> {
    private _elemento: JQuery;
    private _scapeInnerScripts: boolean;

    constructor(elemBase: string, scapeInnerScripts: boolean = false) {
        this._elemento = $(elemBase);
        this._scapeInnerScripts = scapeInnerScripts;
    }

    @logTempoExecucao(false)
    render(varTemplate: T) {
        let template = this.templateString(varTemplate);
        if (this._scapeInnerScripts) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this._elemento.html(template);
    }

    abstract templateString(varTemplate: T): string;
}