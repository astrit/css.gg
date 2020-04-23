"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledColorBucket = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:6px;height:10px;border:2px solid;border-bottom:0;border-top-left-radius:100px;border-top-right-radius:100px;margin-top:-18px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;transform:rotate(45deg)}&::before{border:2px solid;border-bottom-left-radius:4px;border-bottom-right-radius:4px;top:4px;left:-4px;width:14px;height:16px}&::after{width:6px;height:6px;border-radius:0 100% 100% 100%;background:currentColor;right:-15px;bottom:-12px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:6px;height:10px;border:2px solid;border-bottom:0;border-top-left-radius:100px;border-top-right-radius:100px;margin-top:-18px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;transform:rotate(45deg)}&::before{border:2px solid;border-bottom-left-radius:4px;border-bottom-right-radius:4px;top:4px;left:-4px;width:14px;height:16px}&::after{width:6px;height:6px;border-radius:0 100% 100% 100%;background:currentColor;right:-15px;bottom:-12px}\n"])));
exports.ColorBucket = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledColorBucket, tslib_1.__assign({}, props, { ref: ref, "icon-role": "color-bucket" }))));
});
var templateObject_1;
//# sourceMappingURL=ColorBucket.js.map