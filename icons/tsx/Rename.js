"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledRename = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;width:20px;height:16px;transform:scale(var(--ggs,1));background:linear-gradient( to left,currentColor 22px,transparent 0) no-repeat 6px center/2px 22px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:12px;border:2px solid;top:2px}&::before{border-right:0;border-top-left-radius:3px;border-bottom-left-radius:3px}&::after{width:10px;border-left:0;border-top-right-radius:3px;border-bottom-right-radius:3px;right:0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;width:20px;height:16px;transform:scale(var(--ggs,1));background:linear-gradient( to left,currentColor 22px,transparent 0) no-repeat 6px center/2px 22px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:12px;border:2px solid;top:2px}&::before{border-right:0;border-top-left-radius:3px;border-bottom-left-radius:3px}&::after{width:10px;border-left:0;border-top-right-radius:3px;border-bottom-right-radius:3px;right:0}\n"])));
exports.Rename = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledRename, tslib_1.__assign({}, props, { ref: ref, "icon-role": "rename" }))));
});
var templateObject_1;
//# sourceMappingURL=Rename.js.map