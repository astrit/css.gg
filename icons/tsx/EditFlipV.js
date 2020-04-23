"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledEditFlipV = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;width:18px;height:18px;transform:scale(var(--ggs,1));background:linear-gradient( to left,currentColor 22px,transparent 0) no-repeat center/22px 2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:14px;height:6px;border:2px solid;left:2px}&::before{border-bottom:0;border-top-left-radius:3px;border-top-right-radius:3px}&::after{opacity:.5;border-top:0;border-bottom-left-radius:3px;border-bottom-right-radius:3px;bottom:0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;width:18px;height:18px;transform:scale(var(--ggs,1));background:linear-gradient( to left,currentColor 22px,transparent 0) no-repeat center/22px 2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:14px;height:6px;border:2px solid;left:2px}&::before{border-bottom:0;border-top-left-radius:3px;border-top-right-radius:3px}&::after{opacity:.5;border-top:0;border-bottom-left-radius:3px;border-bottom-right-radius:3px;bottom:0}\n"])));
exports.EditFlipV = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledEditFlipV, tslib_1.__assign({}, props, { ref: ref, "icon-role": "edit-flip-v" }))));
});
var templateObject_1;
//# sourceMappingURL=EditFlipV.js.map