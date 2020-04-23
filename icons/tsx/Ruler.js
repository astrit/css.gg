"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledRuler = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:24px;height:13px;border:2px solid;border-radius:3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:2px;height:5px;background:currentColor;left:7px;top:-1px;box-shadow:8px 0 0}&::before{height:7px;left:3px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:24px;height:13px;border:2px solid;border-radius:3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:2px;height:5px;background:currentColor;left:7px;top:-1px;box-shadow:8px 0 0}&::before{height:7px;left:3px}\n"])));
exports.Ruler = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledRuler, tslib_1.__assign({}, props, { ref: ref, "icon-role": "ruler" }))));
});
var templateObject_1;
//# sourceMappingURL=Ruler.js.map