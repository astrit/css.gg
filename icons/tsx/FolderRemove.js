"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledFolderRemove = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:16px;border:2px solid;border-radius:3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px}&::before{background:currentColor;left:5px;width:8px;height:2px;top:5px}&::after{width:10px;height:4px;border:2px solid;border-bottom:0;border-top-left-radius:2px;border-top-right-radius:4px;border-bottom-left-radius:0;border-bottom-right-radius:0;top:-5px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:16px;border:2px solid;border-radius:3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px}&::before{background:currentColor;left:5px;width:8px;height:2px;top:5px}&::after{width:10px;height:4px;border:2px solid;border-bottom:0;border-top-left-radius:2px;border-top-right-radius:4px;border-bottom-left-radius:0;border-bottom-right-radius:0;top:-5px}\n"])));
exports.FolderRemove = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledFolderRemove, tslib_1.__assign({}, props, { ref: ref, "icon-role": "folder-remove" }))));
});
var templateObject_1;
//# sourceMappingURL=FolderRemove.js.map