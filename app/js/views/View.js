System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(elemBase, scapeInnerScripts = false) {
                    this._elemento = $(elemBase);
                    this._scapeInnerScripts = scapeInnerScripts;
                }
                render(varTemplate) {
                    let template = this.templateString(varTemplate);
                    if (this._scapeInnerScripts) {
                        template = template.replace(/<script>[\s\S]*?<\/script>/, '');
                    }
                    this._elemento.html(template);
                }
            };
            exports_1("View", View);
        }
    };
});
