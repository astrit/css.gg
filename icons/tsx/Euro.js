"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledEuro = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:14px;border:2px solid;box-sizing:border-box;border-radius:100px;border-right-color:transparent}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:9px;height:5px;border-top:2px solid;border-bottom:2px solid;transform:skewX(-20deg);left:-4px;top:3px}\n"], ["\n  &{position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:14px;border:2px solid;box-sizing:border-box;border-radius:100px;border-right-color:transparent}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:9px;height:5px;border-top:2px solid;border-bottom:2px solid;transform:skewX(-20deg);left:-4px;top:3px}\n"])));
exports.Euro = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledEuro, tslib_1.__assign({}, props, { ref: ref, "icon-role": "euro" }))));
});
var templateObject_1;
//# sourceMappingURL=Euro.js.map