"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledMoon = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::after{display:block;box-sizing:border-box;border-radius:50%}&{overflow:hidden;position:relative;transform:rotate(-135deg) scale(var(--ggs,1));width:20px;height:20px;border:2px solid;border-bottom-color:transparent}&::after{content:\"\";position:absolute;width:12px;height:18px;border:2px solid transparent;box-shadow:0 0 0 2px;top:8px;left:2px}\n"], ["\n  &,&::after{display:block;box-sizing:border-box;border-radius:50%}&{overflow:hidden;position:relative;transform:rotate(-135deg) scale(var(--ggs,1));width:20px;height:20px;border:2px solid;border-bottom-color:transparent}&::after{content:\"\";position:absolute;width:12px;height:18px;border:2px solid transparent;box-shadow:0 0 0 2px;top:8px;left:2px}\n"])));
exports.Moon = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledMoon, tslib_1.__assign({}, props, { ref: ref, "icon-role": "moon" }))));
});
var templateObject_1;
//# sourceMappingURL=Moon.js.map