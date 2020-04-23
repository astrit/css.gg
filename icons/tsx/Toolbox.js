"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledToolbox = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:16px;border:2px solid;border-radius:2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{border:2px solid;border-bottom:0;border-top-left-radius:3px;border-top-right-radius:3px;left:4px;width:10px;height:4px;top:-5px}&::after{width:18px;height:2px;border-left:4px solid transparent;border-right:4px solid transparent;box-shadow:0 -2px 0,inset 4px 0 0,inset -4px 0 0;top:4px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:16px;border:2px solid;border-radius:2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{border:2px solid;border-bottom:0;border-top-left-radius:3px;border-top-right-radius:3px;left:4px;width:10px;height:4px;top:-5px}&::after{width:18px;height:2px;border-left:4px solid transparent;border-right:4px solid transparent;box-shadow:0 -2px 0,inset 4px 0 0,inset -4px 0 0;top:4px}\n"])));
exports.Toolbox = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledToolbox, tslib_1.__assign({}, props, { ref: ref, "icon-role": "toolbox" }))));
});
var templateObject_1;
//# sourceMappingURL=Toolbox.js.map