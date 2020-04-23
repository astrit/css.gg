"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledVoicemailR = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:21px;height:14px;background:linear-gradient(to left,currentColor 10px,transparent 0)no-repeat 5px 6px/7px 2px;border-radius:3px;border:2px solid}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border:2px solid;border-radius:10px;top:2px}&::before{left:2px}&::after{right:2px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:21px;height:14px;background:linear-gradient(to left,currentColor 10px,transparent 0)no-repeat 5px 6px/7px 2px;border-radius:3px;border:2px solid}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border:2px solid;border-radius:10px;top:2px}&::before{left:2px}&::after{right:2px}\n"])));
exports.VoicemailR = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledVoicemailR, tslib_1.__assign({}, props, { ref: ref, "icon-role": "voicemail-r" }))));
});
var templateObject_1;
//# sourceMappingURL=VoicemailR.js.map