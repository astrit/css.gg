"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledAttachment = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;width:14px;height:14px;border:2px solid;border-top:0;border-bottom-left-radius:100px;border-bottom-right-radius:100px;transform:scale(var(--ggs,1));margin-top:11px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;border:2px solid}&::after{border-bottom:0;border-top-left-radius:100px;border-top-right-radius:100px;right:-2px;width:10px;height:14px;bottom:8px}&::before{width:6px;height:12px;border-top:0;border-bottom-left-radius:100px;border-bottom-right-radius:100px;left:2px;bottom:4px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;width:14px;height:14px;border:2px solid;border-top:0;border-bottom-left-radius:100px;border-bottom-right-radius:100px;transform:scale(var(--ggs,1));margin-top:11px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;border:2px solid}&::after{border-bottom:0;border-top-left-radius:100px;border-top-right-radius:100px;right:-2px;width:10px;height:14px;bottom:8px}&::before{width:6px;height:12px;border-top:0;border-bottom-left-radius:100px;border-bottom-right-radius:100px;left:2px;bottom:4px}\n"])));
exports.Attachment = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledAttachment, tslib_1.__assign({}, props, { ref: ref, "icon-role": "attachment" }))));
});
var templateObject_1;
//# sourceMappingURL=Attachment.js.map