"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledWebcam = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:8px;height:8px;border:2px solid transparent;box-shadow:0 0 0 2px,inset 0 0 0 2px;border-radius:100px;margin-top:-4px}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:10px;height:4px;border-right:4px solid transparent;box-shadow:0 2px 0,inset -2px 0 0;bottom:-6px;left:-3px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:8px;height:8px;border:2px solid transparent;box-shadow:0 0 0 2px,inset 0 0 0 2px;border-radius:100px;margin-top:-4px}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:10px;height:4px;border-right:4px solid transparent;box-shadow:0 2px 0,inset -2px 0 0;bottom:-6px;left:-3px}\n"])));
exports.Webcam = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledWebcam, tslib_1.__assign({}, props, { ref: ref, "icon-role": "webcam" }))));
});
var templateObject_1;
//# sourceMappingURL=Webcam.js.map