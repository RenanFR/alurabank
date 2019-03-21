System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(elemBase) {
                    this._elemento = $(elemBase);
                }
                render(varTemplate) {
                    this._elemento.html(this.templateString(varTemplate));
                }
            };
            exports_1("View", View);
        }
    };
});
