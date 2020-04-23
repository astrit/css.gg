"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledNotes = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:22px;border:2px solid;border-radius:3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;height:2px;background:currentColor;left:2px}&::before{box-shadow:0 4px 0,0 8px 0;width:12px;top:2px}&::after{width:6px;top:14px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:22px;border:2px solid;border-radius:3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;height:2px;background:currentColor;left:2px}&::before{box-shadow:0 4px 0,0 8px 0;width:12px;top:2px}&::after{width:6px;top:14px}\n"])));
exports.Notes = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledNotes, tslib_1.__assign({}, props, { ref: ref, "icon-role": "notes" }))));
});
var templateObject_1;
//# sourceMappingURL=Notes.js.map