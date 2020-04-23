"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledKey = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:6px;height:8px;border:2px solid;border-radius:100px;margin-left:-12px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;right:-12px}&::before{background:currentColor;width:12px;height:2px;top:1px}&::after{width:5px;height:3px;top:2px;border-left:2px solid;border-right:2px solid}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:6px;height:8px;border:2px solid;border-radius:100px;margin-left:-12px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;right:-12px}&::before{background:currentColor;width:12px;height:2px;top:1px}&::after{width:5px;height:3px;top:2px;border-left:2px solid;border-right:2px solid}\n"])));
exports.Key = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledKey, tslib_1.__assign({}, props, { ref: ref, "icon-role": "key" }))));
});
var templateObject_1;
//# sourceMappingURL=Key.js.map