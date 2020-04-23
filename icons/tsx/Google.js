"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledGoogle = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::before{box-sizing:border-box;display:block}&{position:relative;transform:scale(var(--ggs,1));width:20px;height:20px;border:4px solid;border-right-color:transparent;border-radius:22px}&::before{content:\"\";position:absolute;border-top:4px solid;border-right:4px solid;border-bottom:4px solid;border-radius:0 0 10px 0;width:10px;height:12px;right:-4px;bottom:-4px}\n"], ["\n  &,&::before{box-sizing:border-box;display:block}&{position:relative;transform:scale(var(--ggs,1));width:20px;height:20px;border:4px solid;border-right-color:transparent;border-radius:22px}&::before{content:\"\";position:absolute;border-top:4px solid;border-right:4px solid;border-bottom:4px solid;border-radius:0 0 10px 0;width:10px;height:12px;right:-4px;bottom:-4px}\n"])));
exports.Google = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledGoogle, tslib_1.__assign({}, props, { ref: ref, "icon-role": "google" }))));
});
var templateObject_1;
//# sourceMappingURL=Google.js.map