"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var OfferValidator = /** @class */ (function (_super) {
    __extends(OfferValidator, _super);
    function OfferValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OfferValidator.validateCharacters = function (control) {
        if (!control.value)
            return true;
        var offer = Number(control.value);
        if (!!offer) {
            return offer >= 0;
        }
    };
    return OfferValidator;
}(forms_1.Validators));
exports.OfferValidator = OfferValidator;
//# sourceMappingURL=OfferValidator.js.map