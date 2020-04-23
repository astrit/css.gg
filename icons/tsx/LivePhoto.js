"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledLivePhoto = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{transform:scale(var(--ggs,1))}&,&::after{box-sizing:border-box;position:relative;display:block;width:20px;height:20px;border-radius:100px;border:2px dotted currentColor}&::after{content:\"\";position:absolute;width:8px;height:8px;border:1px solid transparent;top:4px;left:4px;box-shadow:0 0 0 2px,inset 0 0 0 2px currentColor}\n"], ["\n  &{transform:scale(var(--ggs,1))}&,&::after{box-sizing:border-box;position:relative;display:block;width:20px;height:20px;border-radius:100px;border:2px dotted currentColor}&::after{content:\"\";position:absolute;width:8px;height:8px;border:1px solid transparent;top:4px;left:4px;box-shadow:0 0 0 2px,inset 0 0 0 2px currentColor}\n"])));
exports.LivePhoto = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledLivePhoto, tslib_1.__assign({}, props, { ref: ref, "icon-role": "live-photo" }))));
});
var templateObject_1;
//# sourceMappingURL=LivePhoto.js.map