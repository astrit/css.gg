"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledRadioChecked = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::after{display:block;box-sizing:border-box;border-radius:100px}&{border:2px solid;position:relative;transform:scale(var(--ggs,1));width:20px;height:20px}&::after{content:\"\";position:absolute;width:8px;height:8px;background:currentColor;top:4px;left:4px}\n"], ["\n  &,&::after{display:block;box-sizing:border-box;border-radius:100px}&{border:2px solid;position:relative;transform:scale(var(--ggs,1));width:20px;height:20px}&::after{content:\"\";position:absolute;width:8px;height:8px;background:currentColor;top:4px;left:4px}\n"])));
exports.RadioChecked = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledRadioChecked, tslib_1.__assign({}, props, { ref: ref, "icon-role": "radio-checked" }))));
});
var templateObject_1;
//# sourceMappingURL=RadioChecked.js.map