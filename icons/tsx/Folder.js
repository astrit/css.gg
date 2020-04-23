"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledFolder = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{transform:scale(var(--ggs,1))}&,&::after{box-sizing:border-box;position:relative;display:block;width:22px;height:16px;border:2px solid;border-radius:3px}&::after{content:\"\";position:absolute;width:10px;height:4px;border-bottom:0;border-top-left-radius:2px;border-top-right-radius:4px;border-bottom-left-radius:0;border-bottom-right-radius:0;top:-5px}\n"], ["\n  &{transform:scale(var(--ggs,1))}&,&::after{box-sizing:border-box;position:relative;display:block;width:22px;height:16px;border:2px solid;border-radius:3px}&::after{content:\"\";position:absolute;width:10px;height:4px;border-bottom:0;border-top-left-radius:2px;border-top-right-radius:4px;border-bottom-left-radius:0;border-bottom-right-radius:0;top:-5px}\n"])));
exports.Folder = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledFolder, tslib_1.__assign({}, props, { ref: ref, "icon-role": "folder" }))));
});
var templateObject_1;
//# sourceMappingURL=Folder.js.map