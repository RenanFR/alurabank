System.register(["../helpers/decorators/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, View;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
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
            __decorate([
                index_1.logTempoExecucao(false)
            ], View.prototype, "render", null);
            exports_1("View", View);
        }
    };
});
