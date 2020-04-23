"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledRepeat = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));box-shadow:-2px -2px 0 0,2px 2px 0 0;width:14px;height:6px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:0;height:0;border-top:3px solid transparent;border-bottom:3px solid transparent}&::before{border-left:5px solid;top:-4px;right:0}&::after{border-right:5px solid;bottom:-4px;left:0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));box-shadow:-2px -2px 0 0,2px 2px 0 0;width:14px;height:6px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:0;height:0;border-top:3px solid transparent;border-bottom:3px solid transparent}&::before{border-left:5px solid;top:-4px;right:0}&::after{border-right:5px solid;bottom:-4px;left:0}\n"])));
exports.Repeat = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledRepeat, tslib_1.__assign({}, props, { ref: ref, "icon-role": "repeat" }))));
});
var templateObject_1;
//# sourceMappingURL=Repeat.js.map