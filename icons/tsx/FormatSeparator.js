"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledFormatSeparator = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{transform:scale(var(--ggs,1))}&,&::after{box-sizing:border-box;position:relative;display:block;width:18px;height:2px;border-radius:3px;background:currentColor}&::after{content:\"\";position:absolute;top:-12px;left:3px;opacity:.5;width:12px;box-shadow:0 4px 0 0,0 8px 0 0,0 16px 0 0}\n"], ["\n  &{transform:scale(var(--ggs,1))}&,&::after{box-sizing:border-box;position:relative;display:block;width:18px;height:2px;border-radius:3px;background:currentColor}&::after{content:\"\";position:absolute;top:-12px;left:3px;opacity:.5;width:12px;box-shadow:0 4px 0 0,0 8px 0 0,0 16px 0 0}\n"])));
exports.FormatSeparator = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledFormatSeparator, tslib_1.__assign({}, props, { ref: ref, "icon-role": "format-separator" }))));
});
var templateObject_1;
//# sourceMappingURL=FormatSeparator.js.map