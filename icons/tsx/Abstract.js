"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledAbstract = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;width:14px;height:14px;transform:scale(var(--ggs,1));border-right:3px solid;border-top:3px solid}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:10px;height:10px;left:0;bottom:0;border:3px solid;border-radius:12px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;width:14px;height:14px;transform:scale(var(--ggs,1));border-right:3px solid;border-top:3px solid}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:10px;height:10px;left:0;bottom:0;border:3px solid;border-radius:12px}\n"])));
exports.Abstract = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledAbstract, tslib_1.__assign({}, props, { ref: ref, "icon-role": "abstract" }))));
});
var templateObject_1;
//# sourceMappingURL=Abstract.js.map