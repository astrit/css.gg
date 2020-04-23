"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledVoicemail = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:10px;border-bottom:2px solid}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:10px;height:10px;border:2px solid;border-radius:10px;top:0;left:-5px}&::after{left:7px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:10px;border-bottom:2px solid}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:10px;height:10px;border:2px solid;border-radius:10px;top:0;left:-5px}&::after{left:7px}\n"])));
exports.Voicemail = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledVoicemail, tslib_1.__assign({}, props, { ref: ref, "icon-role": "voicemail" }))));
});
var templateObject_1;
//# sourceMappingURL=Voicemail.js.map