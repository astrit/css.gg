"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledTranscript = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border:2px solid;border-radius:3px;width:22px;height:18px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;height:2px;border-radius:3px;background:currentColor;bottom:2px}&::before{width:10px;left:2px;box-shadow:4px -4px 0}&::after{width:3px;right:2px;box-shadow:-11px -4px 0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border:2px solid;border-radius:3px;width:22px;height:18px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;height:2px;border-radius:3px;background:currentColor;bottom:2px}&::before{width:10px;left:2px;box-shadow:4px -4px 0}&::after{width:3px;right:2px;box-shadow:-11px -4px 0}\n"])));
exports.Transcript = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledTranscript, tslib_1.__assign({}, props, { ref: ref, "icon-role": "transcript" }))));
});
var templateObject_1;
//# sourceMappingURL=Transcript.js.map